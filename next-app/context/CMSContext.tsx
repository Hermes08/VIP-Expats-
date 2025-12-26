'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BlogPost, Project, QuizSubmission } from '@/lib/types';
import { BLOG_POSTS, PROJECTS } from '@/lib/constants';
import { supabase } from '@/lib/supabaseClient';

interface CMSContextType {
    blogPosts: BlogPost[];
    projects: Project[];
    quizSubmissions: QuizSubmission[];
    refreshData: () => Promise<void>;
    uploadImage: (file: File, bucket: string) => Promise<string | null>;
    addBlogPost: (post: BlogPost) => Promise<boolean>;
    updateBlogPost: (post: BlogPost) => Promise<boolean>;
    deleteBlogPost: (id: string) => Promise<boolean>;
    addProject: (project: Project) => Promise<boolean>;
    updateProject: (project: Project) => Promise<boolean>;
    deleteProject: (id: string) => Promise<boolean>;
    saveQuizSubmission: (submission: QuizSubmission) => Promise<void>;
    deleteQuizSubmission: (id: string) => Promise<void>;
    isAuthenticated: boolean;
    login: (password: string) => void;
    logout: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
    const [projects, setProjects] = useState<Project[]>(PROJECTS);
    const [quizSubmissions, setQuizSubmissions] = useState<QuizSubmission[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if supabase is configured (url not default)
    const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('tu-proyecto');

    const refreshData = async () => {
        if (!isSupabaseConfigured) {
            // Load local leads
            if (typeof window !== 'undefined') {
                const localLeads = localStorage.getItem('rockstar_leads');
                if (localLeads) setQuizSubmissions(JSON.parse(localLeads));
            }
            return;
        }

        try {
            const { data: bData } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
            if (bData) setBlogPosts([...bData, ...BLOG_POSTS]);

            const { data: pData } = await supabase.from('projects').select('*');
            if (pData) setProjects([...pData, ...PROJECTS]);

            const { data: qData } = await supabase.from('quiz_submissions').select('*').order('timestamp', { ascending: false });
            if (qData) setQuizSubmissions(qData);
        } catch (e) {
            console.error("Supabase refresh error:", e);
        }
    };

    useEffect(() => {
        refreshData();
        const auth = localStorage.getItem('cms_auth');
        if (auth === 'true') setIsAuthenticated(true);
    }, []);

    const saveQuizSubmission = async (submission: QuizSubmission) => {
        if (!isSupabaseConfigured) {
            const updated = [submission, ...quizSubmissions];
            setQuizSubmissions(updated);
            localStorage.setItem('rockstar_leads', JSON.stringify(updated));
            return;
        }
        await supabase.from('quiz_submissions').insert([submission]);
        await refreshData();
    };

    const deleteQuizSubmission = async (id: string) => {
        if (!isSupabaseConfigured) {
            const updated = quizSubmissions.filter(s => s.id !== id);
            setQuizSubmissions(updated);
            localStorage.setItem('rockstar_leads', JSON.stringify(updated));
            return;
        }
        await supabase.from('quiz_submissions').delete().eq('id', id);
        await refreshData();
    };

    const uploadImage = async (file: File, bucket: string): Promise<string | null> => {
        if (!isSupabaseConfigured) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(file);
            });
        }
        try {
            const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
            const { error } = await supabase.storage.from(bucket).upload(fileName, file);
            if (error) throw error;
            const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
            return data.publicUrl;
        } catch (e) {
            console.error("Upload error:", e);
            return null;
        }
    };

    const addBlogPost = async (post: BlogPost): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setBlogPosts([post, ...blogPosts]);
            return true;
        }
        const { error } = await supabase.from('blog_posts').insert([post]);
        if (!error) { await refreshData(); return true; }
        return false;
    };

    const updateBlogPost = async (post: BlogPost): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setBlogPosts(blogPosts.map(p => p.id === post.id ? post : p));
            return true;
        }
        const { error } = await supabase.from('blog_posts').update(post).eq('id', post.id);
        if (!error) { await refreshData(); return true; }
        return false;
    };

    const deleteBlogPost = async (id: string): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setBlogPosts(blogPosts.filter(p => p.id !== id));
            return true;
        }
        const { error } = await supabase.from('blog_posts').delete().eq('id', id);
        if (!error) { await refreshData(); return true; }
        return false;
    };

    const addProject = async (project: Project): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setProjects([project, ...projects]);
            return true;
        }
        const { error } = await supabase.from('projects').insert([project]);
        if (!error) { await refreshData(); return true; }
        return false;
    };

    const updateProject = async (project: Project): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setProjects(projects.map(p => p.id === project.id ? project : p));
            return true;
        }
        const { error } = await supabase.from('projects').update(project).eq('id', project.id);
        if (!error) { await refreshData(); return true; }
        return false;
    };

    const deleteProject = async (id: string): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setProjects(projects.filter(p => p.id !== id));
            return true;
        }
        const { error } = await supabase.from('projects').delete().eq('id', id);
        if (!error) { await refreshData(); return true; }
        return false;
    };

    const login = (password: string) => {
        if (password === '1234') {
            setIsAuthenticated(true);
            localStorage.setItem('cms_auth', 'true');
        } else {
            alert('PIN Incorrecto');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('cms_auth');
    };

    return (
        <CMSContext.Provider value={{
            blogPosts, projects, quizSubmissions, refreshData, uploadImage, addBlogPost, updateBlogPost, deleteBlogPost,
            addProject, updateProject, deleteProject, saveQuizSubmission, deleteQuizSubmission, isAuthenticated, login, logout
        }}>
            {children}
        </CMSContext.Provider>
    );
};

export const useCMS = () => {
    const context = useContext(CMSContext);
    if (context === undefined) throw new Error('useCMS must be used within a CMSProvider');
    return context;
};
