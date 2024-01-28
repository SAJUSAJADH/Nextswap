import abi from "./abi.json";

import {
  TwitterOutlined,
  GithubOutlined,
  RedditOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  IeOutlined,
} from "@ant-design/icons";

export const contractABI = abi.abi;

export const contractAddress = "0x0174aE013a8a0C2327c5d8DE697E87591f7c9FB8";

export const navigate = (path) => {
  if (typeof window !== "undefined") {
    console.log("entered");
    window.open(path, "_blank");
  }
};

export const posts = [
  {
    title: "The 3 Key Protocols Transforming Decentralized Finance in 2024",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tech-trend-project.appspot.com/o/posts%2FThe%203%20Key%20Protocols%20Transforming%20Decentralized%20Finance%20in%202024?alt=media&token=61469b37-bd41-4f9a-b468-f3e7d9fb8eb9",
    date: "24-01-2024",
    summary:
      "As we venture into 2024, the landscape of DeFi has evolved remarkably, presenting a plethora of protocols that are not just innovative but crucial in reshaping the financial sector.",
    route:
      "https://techsnoobs.vercel.app/category/Crypto/65b0cc595a02a0915038bb1d",
  },
  {
    title: "How to Find Tokens Before They Pump – Full 2023 Guide",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tech-trend-project.appspot.com/o/posts%2FHow%20to%20Find%20Tokens%20Before%20They%20Pump%20%E2%80%93%20Full%202023%20Guide?alt=media&token=57b2f262-7cbe-43a9-8c0e-9348bd8a205d",
    date: "24-01-2024",
    summary:
      "Altcoins have a massive upside. The average altcoin performance during a bull market is around 50x, but the right altcoins can easily 100x or even 1000x during a bull run.",
    route:
      "https://techsnoobs.vercel.app/category/Crypto/65b0c8a47c768c90624720e0",
  },
  {
    title: "What is a Crypto ETF, and are Crypto ETFs a Game-Changer?",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tech-trend-project.appspot.com/o/posts%2FWhat%20is%20a%20Crypto%20ETF%2C%20and%20are%20Crypto%20ETFs%20a%20Game-Changer%3F?alt=media&token=f8225c33-4216-4894-974e-514ad31f413a",
    date: "24-01-2024",
    summary:
      "On January 10, 2024, the US Securities and Exchange Commission (SEC) finally approved the long-anticipated spot Bitcoin ETF applications.",
    route:
      "https://techsnoobs.vercel.app/category/Crypto/65b0ca1d5a02a0915038bb16",
  },
  {
    title: "Cryptocurrencies Simply Explained",
    image:
      "https://tradedog.io/wp-content/uploads/2023/12/brc20dex-380x214.png",
    date: "24-01-2024",
    summary:
      "Cryptocurrencies, also known as “cryptos,” are digital or virtual currencies. They use cryptography for security and run on various blockchain networks, which are essentially digital ledgers.",
    route:
      "https://techsnoobs.vercel.app/category/Crypto/65b0caa35a02a0915038bb19",
  },
  {
    title: "Crypto Blog Websites – Which is the Best Crypto Blog in 2024?",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tech-trend-project.appspot.com/o/posts%2FCrypto%20Blog%20Websites%20%E2%80%93%20Which%20is%20the%20Best%20Crypto%20Blog%20in%202024%3F?alt=media&token=bbd933ef-3376-4fba-9739-6f43cd23dd98",
    date: "24-01-2024",
    summary:
      "Whether you’re an investor or a Web3 developer, having access to reliable and trustworthy information is crucial for success in crypto.",
    route:
      "https://techsnoobs.vercel.app/category/Crypto/65b0cb3f5a02a0915038bb1b",
  },
  {
    title:
      "Redefining Finance: How Crypto and DeFi will Transform Traditional Finance",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tech-trend-project.appspot.com/o/posts%2FRedefining%20Finance%3A%20How%20Crypto%20and%20DeFi%20will%20Transform%20Traditional%20Finance?alt=media&token=de9ac338-6357-4158-aaf6-23b2681c5a62",
    date: "24-01-2024",
    summary:
      "What is the end goal for crypto and DeFi with respect to TradFi? Crypto maximalists will state that its about Bitcoin, Ether, etc replacing fiat currencies.",
    route:
      "https://techsnoobs.vercel.app/category/Crypto/65b0ccf05a02a0915038bb1f",
  },
];

export const communities = [
  {
    icon: <GithubOutlined className="mb-1 text-2xl" />,
    title: "Github",
    description: "Make your contribution to the Nextswap Community",
    Link: "https://github.com/SAJUSAJADH",
  },
  {
    icon: <TwitterOutlined className="mb-1 text-2xl" />,
    title: "Nextswap twitter Labs",
    description: "Follow the latest news from Nextswap Labs",
    Link: "https://twitter.com/CrypExplorer",
  },
  {
    icon: <LinkedinOutlined className="mb-1 text-2xl" />,
    title: "Nextswap Linkedin",
    description: "Share ideas and participate in Nextswap Governance",
    Link: "https://www.linkedin.com/in/sajusajadh/",
  },
  {
    icon: <InstagramOutlined className="mb-1 text-2xl" />,
    title: "Instagram",
    description:
      "Stay up to date with announcements from the DeFi Education Fund",
    Link: "https://www.instagram.com/codeweb3.0/",
  },
  {
    icon: <RedditOutlined className="mb-1 text-2xl" />,
    title: "Reddit",
    description: "Contribute to wide-ranging Nextswap discussions",
    Link: "https://www.reddit.com/",
  },
  {
    icon: <IeOutlined className="mb-1 text-2xl" />,
    title: "Blogs",
    description: "Learn about recent grants recipients and program updates",
    Link: "https://techsnoobs.vercel.app/",
  },
];
