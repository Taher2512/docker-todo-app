import styles from "./page.module.css";
import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return <div className={styles.page}>{JSON.stringify(users)}</div>;
}
