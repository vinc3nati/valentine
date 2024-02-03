import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h3 className="text-xl">Let&rsquo;s make this happen, shall we ? 🙈</h3>
      <Image
        src="https://res.cloudinary.com/randomwave45/image/upload/v1706987299/tenor_srrarh.gif"
        width="400"
        height="400"
        alt="cheek pinch gif"
      />
      <Link className="px-4 py-2 bg-purple-300 rounded select-none" href={"/"}>
        Surprise me
      </Link>
    </div>
  );
}
