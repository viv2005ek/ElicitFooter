import ListMaker from "./ListMaker";
function AlsoVisitFooter() {
  let datas = [
    "FAQ",
    "Blog",
    "Careers",
    "Services",
    "Support",
    "Sitemap",
    "Legal Notices",
  ];
  return (
    <div>
      <h1
        style={{
          color: "white",
          textDecoration: "underline",
          textDecorationColor: "#B6ADA7",
          textDecorationThickness: "4px",
          marginBottom: "20px",
          fontFamily: "sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Also Visit{" "}
      </h1>
      <div>
        {datas.map((data) => {
          return (
            <>
              <ListMaker data={data}></ListMaker>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default AlsoVisitFooter;
