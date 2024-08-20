import Link from "next/link";

export default async function Dog() {
  const res = await fetch("http://localhost:3000/api/dog");
  const dogData = await res.json();
  return (
    <div className="detail__box">
      <h1>강아지</h1>
      <h2>API 데이터</h2>
      <img src={dogData.image} alt="강아지" className="detail__img" />
      <p>{dogData.message}</p>
      <Link href={"/"}>
        <button> 홈으로 돌아가기</button>
      </Link>
    </div>
  );
}
