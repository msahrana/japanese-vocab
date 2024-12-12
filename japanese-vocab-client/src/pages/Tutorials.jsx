const Tutorials = () => {
  const videos = [
    "https://www.youtube.com/embed/12VQYnuIgrM?si=keJPkuLTL49kQaWV",
    "https://www.youtube.com/embed/8LKSA-NvtgY?si=qUfkJMXZUZiWZ3Uw",
    "https://www.youtube.com/embed/k-OTYdsLgCk?si=AD0uekfFFUK0Muap",
    "https://www.youtube.com/embed/7NxQafrDS8s?si=rCOXo9itFaDrxekL",
    "https://www.youtube.com/embed/1K196d_Xw3Q?si=cBgRj1EnXrqfan53",
    "https://www.youtube.com/embed/BnQR98XwGAg?si=s0rkT3UW6MbKYoEI",
    "https://www.youtube.com/embed/yoRq8iMHqTU?si=fFlKTP5KWtU1xyMj",
    "https://www.youtube.com/embed/IfUWs94G_l8?si=8h2AOisIJkRzVDR0",
    "https://www.youtube.com/embed/FtTgvmR60Hw?si=2UOuMlMVKiT-Npvz",
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold my-5 text-center">Japanese Language in Bangla</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {videos.map((video, index) => (
          <iframe
            key={index}
            width="100%"
            height="200"
            src={video}
            title={`Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
