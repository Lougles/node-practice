import { readFileSync, readFile, writeFile, promises as FSpromises} from "fs";
import { join, resolve, dirname, parse, extname } from "path";
import { fileURLToPath } from "url";

// console.log(readFileSync("package.json", "utf-8"));

// readFile("package.json", "utf-8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });


async function main() {
  // await FSpromises.writeFile("test.txt", "hello");
  // console.log(await FSpromises.readFile("test.txt", "utf-8"));
  // await FSpromises.appendFile("test.txt", "  world");
  // await FSpromises.unlink("test.txt");



  const __dirname = dirname(fileURLToPath(import.meta.url));
  // console.log(join(__dirname, 'index.js'));
  console.log(resolve("index.js"));
  // console.log(parse(__dirname));
  console.log(extname(__dirname));
}
main();