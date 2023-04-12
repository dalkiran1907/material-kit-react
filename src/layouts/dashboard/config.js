import Image from "next/image";

export const items = [
  {
    title: "Worth Harley Davidson",
    path: "/",
    icon: (
      <Image
        fontSize="small"
        src="/assets/logo/harley-logo.png"
        alt="Picture of the author"
        width={20}
        height={20}
        border-radius={50}
      />
    ),
  },
  {
    title: "Reed Chevrolet",
    path: "/reedchevrolet",
    icon: (
      <Image
        fontSize="small"
        src="/assets/logo/reed-logo.jpg"
        alt="Picture of the author"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: " Northtowne Mitsubishi  ",

    path: "/northtownemitsubish",
    icon: (
      <Image
        fontSize="small"
        src="/assets/logo/northtowne-logo.png"
        alt="Picture of the author"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Gavins Point",
    path: "/gavinspoint",
    icon: (
      <Image
        fontSize="small"
        src="/assets/logo/gavins-logo.png"
        alt="Picture of the author"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Bob Sight",
    path: "/bobsight",
    icon: (
      <Image
        fontSize="small"
        src="/assets/logo/ford-logo.png"
        alt="Picture of the author"
        width={20}
        height={20}
      />
    ),
  },
];
