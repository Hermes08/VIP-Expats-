import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { BlogPost, Project, ProjectStatus, ProjectType, ProjectZone, QuizSubmission } from '../types';
import { Upload, Trash2, LogOut, Edit, Plus, LayoutGrid, FileText, Save, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const { 
    isAuthenticated, login, logout, 
    blogPosts, projects, quizSubmissions,
    addBlogPost, updateBlogPost, deleteBlogPost, 
    addProject, updateProject, deleteProject, deleteQuizSubmission,
    uploadImage 
  } = useCMS();
  
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'blogs' | 'leads'>('projects');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const initialProjectState: Partial<Project> = {
    name: { en: '', es: '' },
    location: { en: '', es: '' },
    type: 'Condo',
    zone: 'Beach',
    status: 'Presale',
    priceFrom: 0,
    beds: '1-2',
    baths: '1-2',
    sqft: '100',
    images: [],
    amenities: { en: [], es: [] },
    longDescription: { en: '', es: '' },
    locationAnalysis: { en: '', es: '' },
    investmentAnalysis: { en: '', es: '' },
    buyerProfile: { en: '', es: '' },
    residencyInfo: { en: '', es: '' }
  };

  const [projectForm, setProjectForm] = useState<Partial<Project>>(initialProjectState);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-950 p-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border-t-8 border-brand-GOLD">
          <h1 className="text-3xl font-heading font-bold text-center mb-8 text-brand-900 uppercase">Rockstar Admin</h1>
          <p className="text-sm text-center text-slate-400 mb-6 font-bold tracking-widest">INGRESA PIN (1234)</p>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 mb-6 focus:border-brand-GOLD outline-none text-center text-2xl tracking-[0.5em]"
            placeholder="****"
            onKeyDown={(e) => e.key === 'Enter' && login(password)}
          />
          <button 
            onClick={() => login(password)}
            className="w-full bg-brand-900 text-white font-black py-4 rounded-xl hover:bg-brand-GOLD hover:text-brand-900 transition-all uppercase tracking-widest shadow-xl"
          >
            Desbloquear Panel
          </button>
        </div>
      </div>
    );
  }

  const handleSaveProject = async () => {
    if (!projectForm.id || editingId === 'new') {
      const newProj = { ...projectForm, id: `proj-${Date.now()}`, slug: (projectForm.name?.en || 'new-project').toLowerCase().replace(/\s+/g, '-') } as Project;
      await addProject(newProj);
    } else {
      await updateProject(projectForm as Project);
    }
    setEditingId(null);
  };

  const startEditingProject = (p: Project) => {
    setProjectForm({
      ...initialProjectState,
      ...p,
      name: { ...initialProjectState.name, ...p.name },
      location: { ...initialProjectState.location, ...p.location },
      longDescription: { ...initialProjectState.longDescription, ...p.longDescription },
    });
    setEditingId(p.id);
    setActiveTab('projects');
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setUploading(true);
    const file = e.target.files[0];
    const url = await uploadImage(file, 'project-images');
    if (url) {
      setProjectForm(prev => ({ ...prev, images: [...(prev.images || []), url] }));
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <header className="bg-brand-900 text-white px-8 py-4 flex justify-between items-center shadow-xl shrink-0">
        <div className="flex items-center gap-4">
           <span className="font-black text-xl uppercase tracking-tighter"><span className="text-brand-GOLD">EXPAT</span>ROCKSTARS CMS</span>
           <nav className="flex gap-2 ml-8">
              <button onClick={() => { setActiveTab('projects'); setEditingId(null); }} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'projects' ? 'bg-brand-GOLD text-brand-900' : 'hover:bg-white/10'}`}>Proyectos</button>
              <button onClick={() => { setActiveTab('blogs'); setEditingId(null); }} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'blogs' ? 'bg-brand-GOLD text-brand-900' : 'hover:bg-white/10'}`}>Blog</button>
              <button onClick={() => { setActiveTab('leads'); setEditingId(null); }} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'leads' ? 'bg-brand-GOLD text-brand-900' : 'hover:bg-white/10'}`}>Quiz Leads</button>
           </nav>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xs font-bold hover:text-brand-GOLD uppercase">Ver Sitio</Link>
          <button onClick={logout} className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all"><LogOut size={18}/></button>
        </div>
      </header>

      <main className="p-8 flex-grow overflow-hidden flex flex-col">
        {activeTab === 'projects' && (
          <div className="grid lg:grid-cols-3 gap-8 h-full">
            <div className="lg:col-span-1 space-y-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-brand-900 uppercase">Inventario</h2>
                <button onClick={() => { setEditingId('new'); setProjectForm(initialProjectState); }} className="p-2 bg-brand-GOLD text-brand-900 rounded-lg hover:scale-105 transition-all"><Plus size={20}/></button>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y overflow-y-auto flex-grow">
                {projects.map(p => (
                  <div key={p.id} className={`p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer ${editingId === p.id ? 'bg-brand-50 border-l-4 border-brand-GOLD' : ''}`} onClick={() => startEditingProject(p)}>
                    <div className="flex items-center gap-3">
                      <img src={p.images?.[0]} className="w-10 h-10 rounded object-cover" alt=""/>
                      <p className="font-bold text-brand-900 text-sm">{p.name.es || p.name.en}</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); deleteProject(p.id); }} className="text-slate-300 hover:text-red-500"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {editingId ? (
                <div className="bg-white rounded-3xl shadow-xl p-8 h-full overflow-y-auto space-y-8 animate-in fade-in slide-in-from-right-4">
                  <div className="flex justify-between items-center border-b pb-4">
                    <h3 className="text-2xl font-bold text-brand-900">Editor de Proyecto</h3>
                    <button onClick={handleSaveProject} className="px-6 py-2 bg-brand-900 text-white rounded-lg hover:bg-brand-GOLD hover:text-brand-900 flex items-center gap-2"><Save size={14}/> Guardar</button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <input value={projectForm.name?.es || ''} onChange={e => setProjectForm({...projectForm, name: {...projectForm.name!, es: e.target.value}})} className="p-3 bg-slate-50 border rounded-lg" placeholder="Nombre (ES)"/>
                    <input value={projectForm.name?.en || ''} onChange={e => setProjectForm({...projectForm, name: {...projectForm.name!, en: e.target.value}})} className="p-3 bg-slate-50 border rounded-lg" placeholder="Name (EN)"/>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {projectForm.images?.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                        <img src={img} className="w-full h-full object-cover" alt=""/>
                        <button onClick={() => setProjectForm(prev => ({...prev, images: prev.images?.filter((_, i) => i !== idx)}))} className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"><Trash2 size={24}/></button>
                      </div>
                    ))}
                    <label className="aspect-square border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:border-brand-GOLD hover:text-brand-GOLD cursor-pointer">
                      {uploading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-GOLD"></div> : <><Plus size={24}/><span className="text-[10px] uppercase font-bold mt-2">Subir Imagen</span></>}
                      <input type="file" className="hidden" onChange={handleProjectImageUpload} />
                    </label>
                  </div>
                  <textarea value={projectForm.longDescription?.es || ''} onChange={e => setProjectForm({...projectForm, longDescription: {...projectForm.longDescription!, es: e.target.value}})} className="w-full p-4 bg-slate-50 border rounded-xl font-mono text-xs h-64" placeholder="Contenido Detallado (HTML)..." />
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-white rounded-3xl border-2 border-dashed border-slate-200 text-slate-300">
                  <div className="text-center">
                    <LayoutGrid size={48} className="mx-auto mb-4 opacity-20"/>
                    <p className="font-bold uppercase text-xs">Selecciona un proyecto</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full animate-in fade-in">
             <div className="p-6 bg-slate-50 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-brand-900 uppercase tracking-tight">Leads del Quiz de Barrios</h2>
                <span className="bg-brand-900 text-brand-GOLD px-4 py-1 rounded-full text-[10px] font-black uppercase">{quizSubmissions.length} Capturados</span>
             </div>
             <div className="flex-grow overflow-auto">
               <table className="w-full text-left">
                 <thead className="bg-white sticky top-0 border-b">
                   <tr>
                     <th className="p-6 text-[10px] font-black uppercase text-slate-400">Fecha</th>
                     <th className="p-6 text-[10px] font-black uppercase text-slate-400">Nombre</th>
                     <th className="p-6 text-[10px] font-black uppercase text-slate-400">Email</th>
                     <th className="p-6 text-[10px] font-black uppercase text-slate-400">Match Principal</th>
                     <th className="p-6 text-[10px] font-black uppercase text-slate-400 text-right">Acciones</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y">
                   {quizSubmissions.map(lead => (
                     <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                       <td className="p-6 text-xs text-slate-500">{new Date(lead.timestamp).toLocaleDateString()}</td>
                       <td className="p-6 font-bold text-brand-900">{lead.firstName} {lead.lastName}</td>
                       <td className="p-6 text-sm text-brand-600">{lead.email}</td>
                       <td className="p-6">
                          <span className="px-3 py-1 bg-brand-50 text-brand-700 text-[10px] font-black uppercase rounded-full border border-brand-100">{lead.recommendedNeighborhoods[0]}</span>
                       </td>
                       <td className="p-6 text-right">
                          <div className="flex justify-end gap-4">
                             <button onClick={() => alert(JSON.stringify(lead.answers, null, 2))} className="text-slate-400 hover:text-brand-900 transition-colors"><MessageSquare size={18}/></button>
                             <button onClick={() => deleteQuizSubmission(lead.id)} className="text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18}/></button>
                          </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
               {quizSubmissions.length === 0 && (
                 <div className="h-64 flex flex-col items-center justify-center text-slate-300">
                    <Users size={48} className="mb-4 opacity-20"/>
                    <p className="font-bold uppercase tracking-widest text-xs">No hay leads todavía</p>
                 </div>
               )}
             </div>
          </div>
        )}
      </main>
      <footer className="p-4 text-center text-slate-400 text-[10px] font-bold uppercase border-t bg-white">
         Rockstar CMS Engine v2.5 • ExpatRockstars Panama
      </footer>
    </div>
  );
};

export default AdminPage;