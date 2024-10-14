const { PrismaClient } = require("@prisma/client")

const database = new PrismaClient()

async function run() {
  try {
    // await database.stack.createMany({
    //   data: [
    //     { name: "Move" },
    //     { name: "Rust" },
    //     { name: "React" },
    //     { name: "Solidity" },
    //     { name: "Nextjs" },
    //     { name: "Expressjs" },
    //   ],
    // })
    await database.project.createMany({
      data: [
        {
          title: "Pixel Gaming",
          slug: "pixel-gaming",
          description:
            "Pixel Gaming Gambling Platform is a decentralized gaming experience built on Arweave, featuring a variety of gambling and session based games with secure, transparent transactions.",
          imageUrl: "/images/projects/pixel_gaming.png",
          githubUrl: "https://pixelgaming.us/",
          isFeature: true,
        },
        {
          title: "FluXtream - Send Token as Stream ",
          slug: "fluxtream",
          description:
            "Redefining the Way DAOs and Crypto Businesses Streamline Subscriptions, Salaries, and Rewards with Asset Streaming Protocol. FluXtream is based on Aptos Blockchain which uses Byzantine Fault Tolerance",
          imageUrl: "/images/projects/fluxtream.png",
          githubUrl: "https://github.com/orgs/FluXtream-Move/repositories",
          isFeature: true,
        },
        {
          title: "Anime NFT MarketPlace",
          slug: "anime-nft-marketplace",
          description:
            "The Anime NFT Marketplace Dapp is a platform for anime lovers and collectors who want to buy, sell, or auction anime-related NFTs. The marketplace was integrated with the InterPlanetary File System(IPFS).",
          imageUrl: "/images/projects/anime-marketplace.png",
          githubUrl: "https://github.com/Nishu0/anime_nft_marketplace",
          isFeature: true,
        },
        {
          title: "Sketcherly - Collaborative Dashboard",
          slug: "sketcherly",
          description:
            " Sketcherly, a real-time collaborative design platform for over 500 users, integrating Unsplash Image API and React Icons for 50% faster asset access. AWS Amplify ensured the security of 200 monthly authentication requests.",
          imageUrl: "/images/projects/sketcherly.png",
          githubUrl: "https://sketcherly.vercel.app/",
          isFeature: true,
        },
        {
          title: "BlockFlicks",
          slug: "blockFlicks",
          description:
            "BlockFlicks provides a transparent and decentralized environment, where creators can interact with their audience and get direct feedback on their content.",
          imageUrl: "/images/projects/blockflicks.png",
          githubUrl: "https://block-flicks.vercel.app/",
          isFeature: true,
        },
      ],
    })

    console.log("Success")
  } catch (error) {
    console.log("Error seeding the database project", error)
  } finally {
    await database.$disconnect()
  }
}

run()
