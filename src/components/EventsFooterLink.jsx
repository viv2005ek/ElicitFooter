import ListMaker from "./ListMaker";
function EventsFooterLink() {
  let datas = ["Event", "Event", "Event", "Event"];
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
        Events
      </h1>
      <div className="flex gap-10 gap-y-2 flex-wrap	 sm:block ">
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
export default EventsFooterLink;
