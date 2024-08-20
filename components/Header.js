import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href={"/"}>
        <div>홈</div>
      </Link>
      <Link href={"/dog"}>
        <div>강아지</div>
      </Link>
      <Link href={"/cat"}>
        <div>고양이</div>
      </Link>
    </nav>
  );
}
