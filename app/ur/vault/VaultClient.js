'use client';
import React from 'react';
import Link from 'next/link';
import { FaFolderOpen, FaIdCard, FaBuilding, FaBriefcase, FaPassport, FaUniversity, FaSignOutAlt } from 'react-icons/fa';
import './vault.css'; 

export default function VaultClient({ isRtl, lang }) {
  const categories = [
    { slug: 'residency', icon: FaIdCard, color: '#3b82f6', ur: 'اقامے اور شناختی کارڈ', en: 'Residency & Iqama' },
    { slug: 'property', icon: FaBuilding, color: '#10b981', ur: 'جائیداد', en: 'Property' },
    { slug: 'business', icon: FaBriefcase, color: '#f59e0b', ur: 'بزنس اور معاہدات', en: 'Business' },
    { slug: 'embassy', icon: FaUniversity, color: '#8b5cf6', ur: 'سرکاری خطوط', en: 'Official Letters' },
    { slug: 'personal', icon: FaFolderOpen, color: '#ec4899', ur: 'ذاتی دستاویزات', en: 'Personal Docs' },
    { slug: 'visas', icon: FaPassport, color: '#06b6d4', ur: 'ویزے', en: 'Visas' }
  ];

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
