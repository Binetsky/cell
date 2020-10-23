/* Функция отвечает за перемещение и ограничение области передвижения
 *
 * bodyName - id бактерии
 */
export const movement = (bodyName: string, cursorPosition: { x: number, y: number }) => {
  const body = document.getElementById(bodyName);

  if (!body) return null;
  if (!document || !document.getElementById(bodyName)) return null;

  const birthPos = {
    x: cursorPosition.x,
    y: cursorPosition.y,
  };
  const move = {
    x: Math.floor(Math.random() * Math.floor(10)),
    y: Math.floor(Math.random() * Math.floor(10)),
  };
  const prevPos = {
    x: body.style.left ? Number(body.style.left.slice(0, -2)) : 0,
    y: body.style.top ? Number(body.style.top.slice(0, -2)) : 0,
  };
  const direction = {
    x: move.x % 2 !== 0 ? prevPos.x + move.x : prevPos.x - move.x,
    y: move.y % 2 !== 0 ? prevPos.y + move.y : prevPos.y - move.y,
  };
  const newPos = {
    x: prevPos.x ? direction.x : birthPos.x - 30,
    y: prevPos.y ? direction.y : birthPos.y - 30,
  };

  const shouldKillBacteria = newPos.x < 10
      || newPos.y < 10
      || newPos.x > document.documentElement.clientWidth - 60
      || newPos.y > document.documentElement.clientHeight - 60;

  document.getElementById(bodyName)!.style.top = `${newPos.y}px`;
  document.getElementById(bodyName)!.style.left = `${newPos.x}px`;
  document.getElementById(bodyName)!.style.opacity = '1';

  if (shouldKillBacteria) {
    document.getElementById(bodyName)!.style.opacity = '0';
    setTimeout(() => {
      document.getElementById(bodyName)!.style.display = 'none';
      document.getElementById(bodyName)!.remove();
      return null;
    }, 300);
  }

  setTimeout(() => movement(bodyName, cursorPosition), 300);
};
