const names: string[] = [
  "Борислав",
  "Виолетта",
  "Джимми",
  "Клара",
  "Максимус",
  "Полина",
  "Феликс",
  "Лариса",
  "Артур",
  "Соня",
  "Гриша",
  "Ева",
  "Николай",
  "Роза",
  "Тимофей",
  "Юлия",
  "Валентин",
  "Алиса",
  "Владислав",
  "Мария"
]

export const getRandomName = (): string => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}