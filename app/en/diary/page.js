import ShareWidget from '@/components/ShareWidget';

export default function Diary() {
  const diaryEntries = [
    {
      date: 'September 23, 2026',
      mainTitle: 'A Page from Madam Nusrat Fatima Naqvi\'s Diary',
      blocks: [
        {
          title: 'A Cry from a Broken Heart: The Trauma of Betrayal in the Land of Love',
          icon: '💔',
          text: 'Syria is not merely a piece of land but a grand and sacred chapter of history and spirituality. This is the blessed land where the granddaughter of the Prophet of God (PBUH), the second Zahra, Hazrat Syeda Zainab (s.a.) and the beloved daughter of the Master of Martyrs Imam Hussain (a.s.), Hazrat Sakina (s.a.) rest. Besides them, this pure land is the final resting place of numerous Prophets, Companions, and Saints. The spirituality of this land and the love for these pure personalities made such a home in our hearts that we gladly abandoned the luxurious life of a city like Dubai, our well-established excellent business, and comfortable residence.\n\nIn the love of these great personalities, we settled in Syria to live our lives in their shade. We spent our time and wealth here, established new businesses, and participated fully in philanthropic and social works. We made it our mission to serve pilgrims and travelers coming from any corner of the world and hosted them to the best of our ability. This is no secret; everyone in the area is a witness to this, and the locals know me very well by the name of "Umm-e-Haider" and for my selfless services.\n\nBut today, the heart is extremely heavy, and writing this brings a feeling of immense agony. The land where we built a good name with so much love, affection, and sincerity, and served the people—in return, we received nothing from the locals but pain, sorrow, and suffering. We sowed the seeds of love and loyalty, but in return, we faced betrayal and losses.\n\nAs I am currently residing in the UK, taking advantage of my absence, our flat in Syria was mercilessly looted last year, and extremely valuable items were stolen. The height of oppression is that just yesterday, this very flat was set on fire. This is not merely a loss of property, but the murder of the trust and sincerity that we had placed in this soil and its people.\n\nThe place where we shed our blood and sweat to build a reputation of honor, good name, and love—the cruel behavior of the people there is a deep and unforgettable trauma for us. Today, these words are not just a piece of writing but the agonizing cry of a sorrowful heart, expressing the despair that we gave our all to remain loyal to this land, but in return, we were given nothing but ashes and grievances.'
        }
      ]
    },
    {
      date: 'September 20, 2026',
      mainTitle: 'Today\'s Message from Madam Nusrat Fatima Naqvi',
      blocks: [
        {
          title: 'Wealth, Trial, and the Rights of People',
          icon: '⚖️',
          text: 'The wealth bestowed by nature is not merely a blessing, but a severe trial. The wealth held by the affluent is actually a trust for the poor, of which they are merely custodians. On the Day of Judgment, these people of authority and the wealthy will be strictly questioned as to why, when they had the resources, they did not fulfill the rights of the deserving?'
        },
        {
          title: 'Religious Tolerance and Respect for Humanity',
          icon: '🕊️',
          text: 'The fundamental purpose of all four divinely revealed books is the guidance and salvation of mankind. These teachings demand that every religion be respected with utmost sincerity.\n\nAllah Almighty says in Surah Al-An\'am: "And (O Muslims!) do not insult those (false gods) whom they invoke other than Allah, lest they insult Allah in enmity without knowledge."\n\nTherefore, do not speak ill of anyone\'s religion, so that in return, no one speaks ill of yours. This mutual respect and tolerance is the foundation of a peaceful and united humanity.'
        },
        {
          title: 'The Selfless Spirit of Service of the Ahlul Bayt (a.s.)',
          icon: '🕋',
          text: 'The greatest and brightest examples of humanity are found in the lives of the Holy Prophet (PBUH), Hazrat Ali Al-Murtaza, and Imam Zain-ul-Abideen (a.s.). History bears witness that when these pure personalities were bathed after their passing, there were deep scars on their backs and shoulders.\n\nThese marks were not from swords, but were caused by carrying heavy sacks of rations and supplies to the homes of the poor in the darkness of the night for years. Their greatness lay in the fact that while distributing these rations, they never asked about anyone\'s neighborhood, caste, sect, or religion. Whether someone was Jewish, Christian, a disbeliever, or belonged to any other religion, in their eyes, he was first and foremost a "servant of God," and based on this, they selflessly helped everyone.'
        },
        {
          title: 'The Incident of Hazrat Ibrahim (a.s.) and the Vastness of the Lord\'s Mercy',
          icon: '📖',
          text: 'A beautiful glimpse of this love without discrimination is described in Sheikh Saadi\'s book "Bustan." It was the blessed habit of Hazrat Ibrahim (a.s.) that he would never eat without a guest. Once it happened that a whole week passed and no guest arrived. He went out in search of a guest. He saw a very old man, and Hazrat Ibrahim (a.s.) invited him to his house for a meal with great respect.\n\nWhen the food was served, the old man started eating silently. Hazrat Ibrahim (a.s.) asked in surprise: "O respected elder! Is it not better to thank the Lord who provides sustenance?" The frail man replied: "I am a worshipper of fire." Hazrat Ibrahim (a.s.) angrily asked him to leave the table.\n\nAt that very moment, a revelation came from Allah: "O Ibrahim! I gave this person life for a hundred years, provided him sustenance, and despite his disbelief, never stopped his food and water. And you, my servant, could not tolerate him for even a single meal?"\n\nHazrat Ibrahim (a.s.) was overcome with intense remorse. He immediately ran barefoot in search of the old man. He apologized and brought him back with great respect and seated him at the table. The old man was very surprised at this behavior and asked the reason. Hazrat Ibrahim (a.s.) weeping said how the Lord of the Universe had reprimanded His friend for the sake of this old man.\n\nUpon hearing this, the old man was stunned, tears welled up in his eyes, and he cried out: "How Generous, Merciful, and Kind is that Lord who is scolding His beloved Prophet for a disobedient person like me!" He immediately repented with a sincere heart and embraced faith in the Oneness of Allah.'
        },
        {
          title: 'Message of Humanity',
          icon: '🌟',
          text: 'In today\'s world, when society is engulfed in jealousy, malice, and religious and sectarian prejudices, we need to remember that the greatest act of worship in the sight of God is "Humanity." Those who outwardly claim sympathy but inwardly suffer from malice and discrimination should learn from the character of these great personalities that true religion means spreading love, respecting without discrimination, and embracing every human being.'
        }
      ]
    }
  ];

  return (
    <div className="home-wrapper" style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <section className="message-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {diaryEntries.map((entry, entryIdx) => (
            <div className="message-paper" key={entryIdx}>
              <div className="message-header">
                <h2 className="message-main-title">{entry.mainTitle}</h2>
                <div className="message-divider"></div>
              </div>
              
              <div className="message-content-wrapper">
                {entry.blocks.map((msg, idx) => (
                  <div className="message-block" key={idx}>
                    <h3 className="message-block-title">
                      <span className="msg-icon">{msg.icon}</span>
                      {msg.title}
                    </h3>
                    {msg.text.split('\n\n').map((paragraph, pIdx) => (
                      <p className="message-block-text" key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="message-footer">
                <div className="signature-box">
                  <span className="sig-name">Nusrat Fatima Naqvi</span>
                  <span className="sig-title">(Advocate of Humanity)</span>
                  <span className="sig-date">{entry.date}</span>
                </div>
                <ShareWidget title={entry.mainTitle} text={entry.blocks[0].title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}