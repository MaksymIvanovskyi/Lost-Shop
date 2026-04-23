# LOST — Clothing Store

Сайт магазину одягу LOST. React + Vite.

## Вимоги

- Node.js версії 18 або новіше
- npm (встановлюється разом з Node.js)

## Запуск проєкту

### 1. Розпакуй архів і перейди в папку

```bash
cd lost-store
```

### 2. Встанови залежності (тільки перший раз)

```bash
npm install
```

### 3. Запусти режим розробки

```bash
npm run dev
```

Відкриється в браузері за адресою: **http://localhost:5173**

---

## Збірка для продакшену

```bash
npm run build
```

Готові файли будуть у папці `dist/`. Для перегляду збірки:

```bash
npm run preview
```

## Структура проєкту

```
lost-store/
├── src/
│   ├── App.jsx       # Головний компонент (весь сайт)
│   ├── App.css       # Стилі
│   ├── main.jsx      # Точка входу
│   └── index.css     # Глобальні стилі
├── index.html
├── package.json
└── vite.config.js
```
