import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  // Create user `alice` and `bob` with `posts` relations
  const alice = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io"
    }
  })

  const bob = await prisma.user.create({
    data: {
        name: 'Bob',
        email: "bob@prisma.io",
        posts: {
          create: {
            title: "Hello world",
          }
        }
    }
  })
  
  // Query the Result
  const usersWithPosts = await prisma.user.findMany({
    include:{posts: true}
  })
  console.dir(usersWithPosts, {depth: null})
}

main().then(async (e) =>{
  await prisma.$disconnect()
}).catch(async (e) =>{
  console.log(e)
  await prisma.$disconnect()
  process.exit(1)
})
