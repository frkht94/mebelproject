# MebelProject

Веб-сайт мебельной компании **MebelProject**, специализирующейся на изготовлении мебели на заказ в Алматы и области.

## 🛠️ Технологии

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **Prisma + SQLite**
- **Telegram API (для заявок)**
- **Responsive Design** (адаптивная верстка)
- **SEO-настройки и OG-мета**

## 🚀 Возможности

- Презентация услуг: кухни, шкафы, детская и офисная мебель
- Отдельные страницы с слайдером и SEO-текстом для каждой категории
- Галерея выполненных работ с модальными окнами
- Заявка через форму, отправляется напрямую в Telegram
- Карта Google для контактов
- Поддержка мобильной и десктопной версий
- Защита `.env` и чувствительных данных



## 📦 Установка

```bash
git clone https://github.com/frkht94/mebelproject.git
cd mebelproject
npm install
npx prisma generate
npm run dev

Создай .env файл с таким содержимым:

TELEGRAM_BOT_TOKEN=твой_токен
TELEGRAM_CHAT_ID=твой_айди