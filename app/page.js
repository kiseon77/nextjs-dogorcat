import Link from "next/link";

export default function Home() {
  return (
    <div className="main__box">
      <h1>골라보세요</h1>
      <div>
        <Link href={"/dog"}>
          <button>강아지</button>
        </Link>
        <Link href={"/cat"}>
          <button>고양이</button>
        </Link>
      </div>
    </div>
  );
}
