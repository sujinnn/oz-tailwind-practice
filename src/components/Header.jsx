export default function Header() {
  return (
    <header className="flex justify-between items-center py-10 px-20 bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-20">
        <li className="list-none font-normal text-sm">로그인</li>
        <li className="list-none font-normal text-sm">회원가입</li>
        <li className="list-none font-normal text-sm">내클래스</li>
      </ul>
    </header>
  );
}
