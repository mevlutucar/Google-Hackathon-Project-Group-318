# 🌿 COOPWISE: Gelenekten Geleceğe, Akıllı Kooperatifçilik

**COOPWISE**, küçük ve orta ölçekli kooperatiflerin (tarım, gıda, el sanatları) günlük operasyonel yüklerini hafifletmek, stok krizlerini önlemek ve müşteri iletişimini otonom hale getirmek için tasarlanmış **Yapay Zeka Destekli bir Yönetim ve Satış Portalıdır.** 


---

## 🚀 Problem Tanımı

Kooperatifler ve KOBİ'ler günümüzde hala manuel yöntemlerle (defterler, dağınık tablolar) operasyon yürütmektedir.  Bu durum şu sorunlara yol açmaktadır:

* **Manuel Stok Yönetimi:** Siparişlerin takipsizliği ve stok krizleri. 


* **Kopuk İletişim:** Günde ortalama 2-3 saatin sadece kargo ve stok sorularını yanıtlamakla geçmesi. 


* **Operasyonel Yük:** Üreticinin işini büyütmek yerine tekrarlayan görevlerle boğuşması. 



## ✨ Çözüm ve Temel Özellikler

COOPWISE, bu süreçleri **Aksiyon Alabilen Yapay Zeka Ajanları** ile otomatikleştirir: 

* **🤖 RAG Tabanlı Akıllı Asistan:** Kendi dokümanları ve ürün veritabanı üzerinden beslenen asistan, müşteri sorularına anında ve bağlama uygun yanıtlar verir. 


* **📦 Otonom Stok Analiz Ajanı:** Kritik stok seviyelerini takip eder, n8n üzerinden Gemini AI ile tedarikçilere otomatik sipariş mailleri hazırlar ve gönderir. 


* **🚚 Lojistik Denetim Ajanı (Telegram & Gmail):** * Müşteriler Telegram üzerinden kargo durumlarını otonom olarak sorgulayabilir. 


* Geciken kargoları sistem otomatik tespit eder ve müşteriye kişiselleştirilmiş "özür ve bilgilendirme" maili gönderir. 





---

## 🛠 Teknik Mimari

Sistem uçtan uca entegre bir yapıyla çalışmaktadır: 

1. **Frontend:** React (Modern ve kullanıcı dostu arayüz) 


2. **Backend:** Fast API (Hızlı ve güvenli veri işleme) 


3. **Aksiyon Motoru:** n8n Webhook (Sistemler arası köprü ve otomasyon) 


4. **Zeka Katmanı:** Gemini AI & Groq (Karar alma ve doğal dil üretimi) 



---

## ⚙️ Nasıl Çalışır?

Proje akış şeması şu şekildedir: **Kullanıcı Etkileşimi ➔ Veri İşleme (FastAPI) ➔ Aksiyon Motoru (n8n) ➔ Karar Alma (AI) ➔ Aksiyon (E-posta/Telegram/Stok Güncelleme)** 

---

## 📁 Proje Yapısı

```text
COOPWISE/
├── frontend/             # React kaynak kodları
├── backend/              # FastAPI kaynak kodları ve API endpointleri
├── n8n_workflows/        # .json formatında n8n iş akışları (Agents)
└── docs/                 # Proje sunumu ve dokümantasyon

```

---

## 💻 Kurulum ve Çalıştırma

### Frontend (React)

```bash
cd frontend
npm install
npm run dev

```

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

```

---

## 👥 Grup Üyeleri - Grup 318

Bu proje, **Google Yapay Zeka ve Teknoloji Akademisi - Hackathon 2026** kapsamında geliştirilmiştir. 

* **Esra Bayrakcı** - 5. Dönem Yapay Zeka Akademi Bursiyeri 


* **Mevlüt Uçar** - 5. Dönem Yapay Zeka Akademi Bursiyeri 


* **Seymen Budak** - 5. Dönem Yapay Zeka Akademi Bursiyeri 



---

Bu proje, T.C. Sanayi ve Teknoloji Bakanlığı, Google, T3 Girişim Merkezi ve Girişimcilik Vakfı paydaşlığında yürütülen akademi programı çıktısıdır.
