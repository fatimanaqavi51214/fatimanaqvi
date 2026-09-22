import React from 'react';

export default function Business() {
  return (
    <div className="container">
      
      {/* Hero Banner */}
      <div className="hero-banner" style={{ borderRadius: '15px', marginBottom: '40px' }}>
        <div className="banner-inner" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '15px' }}>Business</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0c4de' }}>Madam Nusrat Fatima Naqvi's Global Business and Social Activities</p>
        </div>
      </div>

      <div className="content-section" style={{ padding: '40px 20px', lineHeight: '2.2' }}>
        
        {/* Intro Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px', fontSize: '1.2rem', textAlign: 'justify' }}>
            <p style={{ marginBottom: '15px' }}>
              <strong>Nusrat Fatima Naqvi (Advocate of Humanity)</strong> is a highly active, courageous, and world-class business and social personality. The scope of her business activities extends to most countries of the world, and she has proven that a courageous woman can plant the flags of success in every field.
            </p>
            <p style={{ marginBottom: '15px' }}>
              She started various businesses in Dubai and Sharjah from the 1970s. Her business ownership included a block factory in Sharjah, <strong>'Al-Rafidain General Decor'</strong> (1977), a vehicle repair garage named <strong>'Garage Al-Rafidain'</strong> (1980), and a partnership in <strong>'Mat\'am Al-Tuma'</strong> (restaurant) in Ajman. Furthermore, in 1997, she handled top administrative affairs as a Sales Manager at <strong>'Asli General Trading'</strong>.
            </p>
            <p>
              A huge part of her business exists in Syria, where she owns a magnificent hotel named <strong>"Zayuf ur Rahman"</strong> and various flats in the historic city of Damascus. According to the documents of the Damascus Chamber of Commerce in 2010, she owns a vast import-export network encompassing extensive trade in clothing, electronics, books, computers, medical and laser equipment, and construction materials. According to a document from the Pakistani Embassy (2025), she is currently residing in the UK and Spain, and by the grace of God, she is successfully managing her global business and social activities from there.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img 
              src="https://res.cloudinary.com/b7xbeztp/image/upload/v1790094999/171e973f-12bc-4c33-84d8-b9ccb163f84a.png" 
              alt="Business Activities of Nusrat Fatima Naqvi" 
              style={{ width: '100%', maxWidth: '450px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', border: '2px solid #d4af37' }} 
            />
          </div>
        </div>

        {/* Hotel Section */}
        <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '15px', padding: '40px 30px', marginBottom: '50px' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '20px', textAlign: 'center' }}>Zayuf ur Rahman Hotel</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px auto' }}>
            Your ultimate destination for work and relaxation in the heart of the Sayyida Zainab (s.a.) area! Whether you have come for Ziyarat, tourism, a short business trip, or are looking for a great place to explore the city, the <strong>(Zayuf ur Rahman)</strong> hotel takes wonderful care of you with the best facilities and comfort.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ color: '#b0c4de', marginBottom: '20px' }}>Hotel Features:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2' }}>
                <li><strong>Prime Location:</strong> Located very close to the holy shrine of Sayyida Zainab (peace be upon her).</li>
                <li><strong>Exhibition Center</strong> and just a few minutes away from major commercial areas.</li>
                <li><strong>Ultra-High-Speed Internet:</strong> Free and powerful Wi-Fi network available seamlessly throughout the hotel.</li>
                <li><strong>Excellent Working Environment:</strong> Rooms equipped with comfortable desks, as well as modern halls for meetings and conferences.</li>
                <li><strong>24-Hour Service:</strong> A professional team ready to meet your needs at any time (24/7).</li>
                <li><strong>Business Offer:</strong> Special discounts for company and group bookings, including pick and drop facilities from the airport.</li>
                <li>The most delicious and finest dishes of Syrian cuisine will be found at 'Zayuf ur Rahman Hotel', which is the best and most magnificent in the Sayyida Zainab (s.a.) area. 'Zayuf ur Rahman Hotel' always strives to do something new and unique to serve the pilgrims of Sayyida Zainab (s.a.) and Sayyida Ruqayyah (s.a.).</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <video 
                controls 
                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', border: '2px solid #333' }}
              >
                <source src="https://res.cloudinary.com/b7xbeztp/video/upload/v1790095149/WhatsApp_Video_2026-09-20_at_12.53.37_AM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Other Videos Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          
          <div style={{ flex: '1 1 400px', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid #333', borderRadius: '15px', padding: '25px', display: 'flex', flexDirection: 'column' }}>
            <video 
              controls 
              style={{ width: '100%', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
            >
              <source src="https://res.cloudinary.com/b7xbeztp/video/upload/v1790095246/zayuf-ur-rahan2.mp4" type="video/mp4" />
            </video>
            <p style={{ fontSize: '1.1rem', flexGrow: 1, textAlign: 'justify' }}>
              <strong>Zayuf ur Rahman (Guests of God)</strong> is always at your service. This video shows some scenes of serving the pilgrims. Various types and varieties of food served to our respected travelers are presented, prepared by an expert Iraqi chef. Welcome, pilgrims of Umm Al-Masaib Hazrat Zainab Al-Kubra (peace be upon her).
            </p>
          </div>

          <div style={{ flex: '1 1 400px', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid #333', borderRadius: '15px', padding: '25px', display: 'flex', flexDirection: 'column' }}>
            <video 
              controls 
              style={{ width: '100%', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
            >
              <source src="https://res.cloudinary.com/b7xbeztp/video/upload/v1790095177/zayuf-ur-rahan3.mp4" type="video/mp4" />
            </video>
            <p style={{ fontSize: '1.1rem', flexGrow: 1, textAlign: 'justify' }}>
              Scenes of holding a <strong>Majlis-e-Aza</strong> in the restaurant hall of 'Zayuf ur Rahman Hotel' on the occasion of the eve of the martyrdom of the Holy Prophet Hazrat Muhammad (PBUH), which was attended by numerous speakers. We always strive to do something new and unique to serve the pilgrims of Sayyida Zainab (s.a.) and Sayyida Ruqayyah (s.a.). With us, your journey remains a memorable journey of a lifetime.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
