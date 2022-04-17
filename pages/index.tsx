import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import MainCard from "../components/section-grid";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moiz Imran</title>
      </Head>
      <Link href="/about">
        <a>About page</a>
      </Link>
      <MainCard />
    </div>
  );
}
