import React, { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [recipient, setRecipient] = useState('Zharifah');
  const [message, setMessage] = useState(
`Aku nulis pesan ini murni dari hati aku yang paling dalam. Aku mau minta maaf atas segala kesalahan dan kekuranganku selama jadi teman kamu.

Kita berdua tahu dinamika pertemanan kita dari awal kenal sampai hari ini udah melewati perjalanan yang cukup panjang dan berliku. Banyak hal yang tumbuh dan berubah seiring berjalannya waktu. Jujur, kamu itu satu-satunya cewek yang punya vibes beda banget buat aku. Sampai-sampai, kamu itu cewek pertama dan satu-satunya yang pernah aku snapgram-in, bahkan pernah aku ceritain langsung ke orang tuaku. Aku nggak pernah se-niat itu kenal sama cewek lain sampai bikin SG bareng.

Aku juga sekalian mau klarifikasi soal gosip atau tuduhan yang bilang aku lagi deket sama anak Al Azhar. Aku berharap banget kamu nggak makan mentah-mentah isu itu apalagi sampai menganggap itu benar. Jujur, demi apapun, aku nggak pernah ada hubungan apa-apa. Jangankan deket atau chatting-an khusus, aku bahkan nggak punya temen cewek ataupun temen cowok yang sekolah di Al Azhar sama sekaliiii. Semua itu cuma rumor atau salah paham yang nggak jelas asalnya dari mana, dan aku cuma mau kamu denger langsung versi yang sebenarnya dari aku.

Maybe right now you’re getting close to another guy, and if he makes you happy, I’m honestly happy for you. Deep down, you’ve always been someone special to me, like you were mine in a way that’s hard to explain. But even if we grow a bit distant now, please know you’ll always have a special place in my life. I’ll always root for you no matter what.

Terlepas dari semua kesalahpahaman yang ada Mau gimana pun dinamika kita sekarang, pertemanan ini terlalu berharga buat dilupain gitu aja. Makasih ya udah kasih warna yang beda di hidup aku. Maaff kalau caraku dewasa dalam menyimpan perasaan ini masih banyak kurangnya.

OHH IYAA, kalau besok-besok kamu lagi ada masalah entah itu urusan sekolah, cowok, atau topik just friend yang bikin pusing-cerita aja ke aku ya. Tapi ya maklum-maklum aja nihh yaa kalau responku berasa kayak ngirim surat pakai burung merpati atoo agak lama. Maklum, namanya juga anak pondok, pegang HP-nya kan mesti nunggu jatah perizinan keluar dulu atau pas mapel Informatika.😂 🤍

“Kalau kata maaf aja rasanya masih belum cukup, web sederhana yang sengaja aku bikin sendiri semalam ini mungkin bisa jadi salah satu bentuk effort kecilku, biar kamu tahu betapa berharganya kamu dan pertemanan kita”

Penutup: Pantun bukan sembarang pantun
Ke pasar bareng Faras dan Walid,
Niat beli roti malah dapet biskuit.
Biar kata balesnya butuh waktu dikit,
Temenan sama kamu tetap yang paling favorit!`
  );

  return (
    <main className="min-h-screen bg-[#FDF0ED] flex flex-col items-center justify-center p-3 sm:p-6 relative overflow-x-hidden selection:bg-pink-200">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 sm:w-52 h-40 sm:h-52 bg-rose-200 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 w-full max-w-lg flex flex-col items-center justify-center my-auto">
        
        {/* Badge With Love Mengambang Di Atas */}
        <div className="mb-4 sm:mb-6 animate-pulse">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/60 shadow-sm text-[#d96b72] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            With Love
          </span>
        </div>

        {!isOpen ? (
          /* ================= HALAMAN 1: AMPLOP PINK ================= */
          <div className="flex flex-col items-center gap-6 w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[380px]">
            <div 
              onClick={() => setIsOpen(true)}
              className="relative w-full h-[200px] sm:h-[240px] bg-[#f58da1] rounded-2xl shadow-xl cursor-pointer select-none hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
            >
              {/* Prangko Bunga Kanan Atas */}
              <div className="absolute top-3 right-4 z-20 bg-white/90 p-1.5 rounded-md shadow-sm border border-dashed border-pink-300 flex items-center justify-center">
                <span className="text-sm sm:text-base">🌸</span>
              </div>

              {/* Sisi Belakang Amplop */}
              <div className="absolute inset-0 bg-[#ea7a90]"></div>

              {/* Sisi Lipatan Samping & Bawah Amplop */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] sm:border-t-[120px] border-t-transparent border-l-[150px] sm:border-l-[190px] border-l-[#f08097] border-b-[100px] sm:border-b-[120px] border-b-transparent"></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] sm:border-t-[120px] border-t-transparent border-r-[150px] sm:border-r-[190px] border-r-[#f08097] border-b-[100px] sm:border-b-[120px] border-b-transparent"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[105px] sm:border-b-[125px] border-b-[#e87289] border-l-[150px] sm:border-l-[190px] border-l-transparent border-r-[150px] sm:border-r-[190px] border-r-transparent"></div>
              </div>

              {/* Lipatan Penutup Atas Amplop */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[105px] sm:border-t-[125px] border-t-[#df6a82] border-l-[150px] sm:border-l-[190px] border-l-transparent border-r-[150px] sm:border-r-[190px] border-r-transparent origin-top z-20"></div>

              {/* Teks Di Atas Amplop */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center pointer-events-none pt-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md mb-2 border border-white/40 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xs font-bold">♥</span>
                </div>
                <span className="text-[10px] sm:text-xs tracking-widest text-white/90 uppercase font-semibold">
                  UNTUK
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-white font-bold tracking-wide mt-0.5 drop-shadow-sm">
                  {recipient}
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 tracking-wider flex items-center gap-1 font-medium animate-bounce">
              ↓ KETUK UNTUK BUKA ↓
            </p>
          </div>
        ) : (
          /* ================= HALAMAN 2: SURAT PESAN (FULL HALAMAN) ================= */
          <div className="w-full bg-[#FAF8F5] rounded-2xl p-5 sm:p-10 shadow-2xl border border-[#eae2d9] relative transition-all duration-500 my-2 sm:my-4 animate-fade-in">
            
            {/* Tombol Opsi Kanan Atas */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 sm:gap-2">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-2.5 py-1 rounded-full bg-black/5 hover:bg-black/10 text-[11px] sm:text-xs text-gray-600 transition-colors font-medium"
              >
                ✕ Tutup
              </button>
            </div>

            {/* Nama Penerima Surat */}
            <div className="mb-4 sm:mb-6 pt-1 sm:pt-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-1">
                PESAN UNTUK
              </span>
              {isEditing ? (
                <input 
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full text-xl sm:text-3xl font-serif text-[#3a302f] bg-white border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-[#d96b72]"
                />
              ) : (
                <h1 className="text-xl sm:text-3xl font-serif text-[#3a302f]">
                  Dear <span className="text-[#d96b72] font-semibold">{recipient}</span>
                </h1>
              )}
            </div>

            {/* Isi Pesan Surat */}
            <div className="text-gray-600 text-xs sm:text-base leading-relaxed space-y-3 sm:space-y-4 max-h-[55vh] sm:max-h-[60vh] overflow-y-auto pr-1 sm:pr-2">
              {isEditing ? (
                <textarea
                  rows={12}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs sm:text-base text-gray-700 bg-white border border-gray-300 rounded p-2.5 sm:p-3 focus:outline-none focus:border-[#d96b72] leading-relaxed resize-none"
                />
              ) : (
                message.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line text-justify">
                    {paragraph}
                  </p>
                ))
              )}
            </div>

            {/* footer Surat Responsive */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] sm:text-xs text-gray-400">
              <span className="leading-normal">
                Ditulis dengan puitis kritis udah kayak makalah/skripsi dahh pokonyamahh FIXXX DOSEN ACC kalo ada yang mau bikin web gini inpokan RAPIP NYAK
              </span>
              <div className="flex items-center gap-1 text-[#d96b72] font-medium shrink-0 self-end sm:self-auto">
                <span>Zharifah</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}