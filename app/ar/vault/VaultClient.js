'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFolderOpen, FaIdCard, FaBuilding, FaBriefcase, FaPassport, FaUniversity, FaSignOutAlt, FaEnvelope } from 'react-icons/fa';
import './vault.css'; 

export default function VaultClient({ isRtl, lang, documentsList = [] }) {
  const categories = [
    { slug: 'residency', icon: FaIdCard, color: '#3b82f6', ur: 'اقامے اور شناختی کارڈ', en: 'Residency & Iqama' },
    { slug: 'property', icon: FaBuilding, color: '#10b981', ur: 'جائیداد', en: 'Property' },
    { slug: 'business', icon: FaBriefcase, color: '#f59e0b', ur: 'بزنس اور معاہدات', en: 'Business' },
    { slug: 'embassy', icon: FaUniversity, color: '#8b5cf6', ur: 'سرکاری خطوط', en: 'Official Letters' },
    { slug: 'personal', icon: FaFolderOpen, color: '#ec4899', ur: 'ذاتی دستاویزات', en: 'Personal Docs' },
    { slug: 'visas', icon: FaPassport, color: '#06b6d4', ur: 'ویزے', en: 'Visas' }
  , { slug: 'letters', icon: FaEnvelope, color: '#f43f5e', ur: 'شخصیات کے لیٹر', en: 'Letters from Personalities' }];

  
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDocs = searchQuery.trim() === '' ? [] : documentsList.filter(doc => {
    const q = searchQuery.toLowerCase();
    return doc.id.toLowerCase().includes(q) || 
           (doc.urName && doc.urName.toLowerCase().includes(q)) || 
           (doc.enName && doc.enName.toLowerCase().includes(q)) ||
           (doc.arName && doc.arName.toLowerCase().includes(q)) ||
           (doc.faName && doc.faName.toLowerCase().includes(q)) ||
           (doc.esName && doc.esName.toLowerCase().includes(q));
  });
  
  const handleLogout = () => {
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/login';
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ background: '#09090b', minHeight: '100vh', padding: '50px 20px', color: 'white' }}>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '1000px', margin: '0 auto', paddingBottom: '20px' }}>
        <button onClick={handleLogout} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          <FaSignOutAlt /> {isRtl ? 'لاگ آؤٹ کریں' : 'Logout'}
        </button>
      </div>

      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px', color: '#f4f4f5' }}>
        {isRtl ? 'دستاویزات کی کیٹیگریز (Categories)' : 'Document Categories'}
      </h1>
      <p style={{ textAlign: 'center', color: '#a1a1aa', marginBottom: '50px', fontSize: '1.2rem' }}>
        {isRtl ? 'براہ کرم متعلقہ ٹاپک منتخب کریں:' : 'Please select a topic:'}
      </p>

      
      <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', position: 'relative' }}>
        <input 
          type="text" 
          placeholder={isRtl ? 'ڈاکومنٹ کا نام یا نمبر لکھ کر تلاش کریں... (مثلاً 265)' : 'Search documents by name or ID... (e.g., 265)'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '18px 25px',
            fontSize: '1.2rem',
            borderRadius: '50px',
            border: '2px solid #3b82f6',
            backgroundColor: '#18181b',
            color: 'white',
            outline: 'none',
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
          }}
          dir={isRtl ? 'rtl' : 'ltr'}
        />
        
        {searchQuery.trim() !== '' && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '10px',
            backgroundColor: '#18181b',
            border: '1px solid #3f3f46',
            borderRadius: '16px',
            padding: '15px',
            maxHeight: '400px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}>
            {filteredDocs.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
                {filteredDocs.map(doc => (
                  <Link href={`/${lang}/document/${doc.id}`} key={doc.id} style={{ textDecoration: 'none' }}>
                    <div style={{
                      background: '#27272a',
                      padding: '15px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#3f3f46'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#27272a'}
                    >
                      {doc.imageUrl ? (
                        <img src={doc.imageUrl} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                      ) : (
                        <div style={{ width: '50px', height: '50px', background: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaFolderOpen color="white" /></div>
                      )}
                      <div>
                        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>{isRtl ? doc.urName || doc.enName : doc.enName || doc.urName}</div>
                        <div style={{ color: '#a1a1aa', fontSize: '0.8rem', marginTop: '4px' }}>{doc.id} | {doc.category}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#a1a1aa' }}>
                {isRtl ? 'کوئی ڈاکومنٹ نہیں ملا!' : 'No documents found!'}
              </div>
            )}
          </div>
        )}
      </div>
  
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Link href={`/${lang}/category/${cat.slug}`} key={idx} style={{ textDecoration: 'none' }}>
              <div style={{ 
                background: '#18181b', 
                border: '1px solid #27272a', 
                borderRadius: '16px', 
                padding: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.transform = 'translateY(-5px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#27272a'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ background: `${cat.color}20`, padding: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon style={{ fontSize: '30px', color: cat.color }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>{isRtl ? cat.ur : cat.en}</h2>
                  <p style={{ color: '#71717a', margin: '5px 0 0 0' }}>{cat.slug}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
