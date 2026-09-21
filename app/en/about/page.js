export default function About() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490226/urdu.mp4';
  const videoHeading = '🎥 Introductory Video';

  const content = [
    'Nusrat Fatima Naqvi (Advocate for Humanity): Continuous struggle in service to mankind and a noble lady with deep compassion',
    'Written by: Haji Shabbir Ahmed Shigri',
    'Throughout human history, individuals who keep their souls closely bound to their Creator and the service of mankind—even while reaching the heights of worldly success—are held in the highest esteem. The life of Madam Nusrat Fatima Naqvi is a brilliant testament to this noble character. Today, she continues to stand tall as an accomplished international businesswoman and philanthropist, selflessly dedicating her resources to humanitarian, social, and spiritual causes to establish an enduring legacy of righteous deeds.',
    'Early Life and Family Background: Madam Nusrat Fatima Naqvi was born in 1958 in Karachi, Pakistan. Her father was Syed Muhammad Naqvi and her mother was Mehr Bano. Raised in an educated, virtuous, and devout household, Nusrat Fatima resolved from her earliest days to strive continuously in knowledge, dignity, and righteous action—a commitment she champions to this day. Her late husband, Ghulam Sarwar Chaudhry, passed away on October 31, 2005, in Lahore. Her children are Jawad, Hajra, and Fawad Haider. Her permanent residence in Pakistan is in Gulberg III, Lahore. Her husband placed boundless trust in her administrative and executive acumen, granting her full legal power of attorney in 2004 to oversee commercial operations, family education, and international travel.',
    'International Business Acumen: She is an exceptionally dynamic, courageous, and world-class commercial leader. Her business activities span several continents, illustrating how a determined and visionary woman can achieve remarkable excellence across competitive industries. Beginning in the 1970s, she established diverse ventures in Dubai and Sharjah, including an industrial block factory, Al-Rafidain General Decor (1977), Al-Rafidain automotive service garage (1980), and a partnership in the Mat’am Al-Tu’ma restaurant in Ajman. In 1997, she held senior management responsibilities as Sales Manager at Asli General Trading.',
    'Syria, the UK, and Europe: She established a substantial commercial presence in Syria, including a distinguished hotel and residential apartments in Damascus. According to official 2010 Damascus Chamber of Commerce records, she owned an extensive import-export network trading in apparel, electronics, educational literature, computers, medical and laser instruments, and building materials. According to Pakistani diplomatic records (2025), she currently resides between the United Kingdom and Spain, directing her worldwide commercial enterprises and social initiatives with distinction.',
    'Personal Observations, Compassion, and Devotion: The author has personally known Madam Nusrat Fatima Naqvi for decades, dating back to my diplomatic service at the Embassy. She visited frequently, and as an intellectual, prudent, and highly dignified lady, she cultivated respectful relations with high-ranking diplomatic and cultural dignitaries from numerous nations. I have consistently witnessed her profound devotion to faith, sincere empathy, and unyielding modesty. Despite vast business duties, she has always stood at the vanguard of humanitarian relief, feeling deep pain for those who suffer and extending immediate help. Her moral integrity, thoughtful eloquence, and persuasive speech leave a lasting impression, born of a lifetime of international experience and cross-cultural understanding.',
    'Devotion to Ahlul Bayt (a.s.) and Propagation of Knowledge: From early childhood, she held deep love for religion and the Holy Ahlul Bayt (a.s.), practically embodying their virtues. During spiritual commemorations, she actively organizes and sponsors gatherings, instilling these noble principles into her children. Deeply honoring righteous saints, she has also contributed significantly to the renovation and welfare of sacred shrines, including Data Darbar and Bibi Pak Daman. Her core mission is to promote enlightened spiritual and moral education, believing that true social reform requires enlightened hearts and minds.',
    'Unmatched Philanthropy and Charitable Works: Material wealth never diverted her from her higher purpose. In 1982, she donated prime land valued at 25 million Syrian Pounds in Sayyida Zainab (s.a.) to the Syrian Government for welfare initiatives, receiving official gratitude from the Ministry of Awqaf. In 1981, she undertook the construction of Hussainiya Zainab Al-Zahra in Damascus with legal authorization from Dubai Courts. In January 1994, she donated valuable land to the Ahlul Bayt World Assembly for building a major library, Hussainiya, guesthouse, and offices. In 1983, she donated land to the Red Crescent for a hospital and orphanage, and in 2007 provided advanced medical equipment and supplies to the Al-Zahra Welfare Clinic. In 1989, she formally offered the UAE Ministry of Awqaf the construction of a mosque, clinic, residential quarters, and a Quran memorization center.',
    'Global Humanitarian Expansion: Her compassionate vision extends worldwide. Moving into Europe, she has spearheaded initiatives to establish Hussainiyas and academic institutions to uplift communities, creating lasting centers of faith, learning, and mutual support.',
    'Conclusion: Madam Nusrat Fatima Naqvi’s life is an inspiring example of how a dedicated woman can attain global commercial success and channel that success entirely into the service of Almighty God—supporting orphans, building healthcare facilities and religious centers, and serving vulnerable communities. These perpetual charitable deeds (Sadaqah Jariyah) remain active today. We pray for Madam Nusrat Fatima Naqvi’s good health, security, and long life so that her noble benevolence may continue to enrich humanity.'
  ];

  return (
    <div className="container">
      <h1>About Madam Nusrat Fatima Naqvi</h1>
      
      <h2 className="video-heading">{videoHeading}</h2>

      <div className="about-video-wrapper">
        <video
          src={videoLink}
          controls
          className="about-video"
          playsInline
          preload="metadata"
        />
      </div>

      {content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}
