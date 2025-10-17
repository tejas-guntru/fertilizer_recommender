export default function ZoomEarth() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="https://zoom.earth/maps/satellite/#view=14.86,79.11,5z/date=2025-10-17,11:45,+5.5"
        style={{ border: "none", width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
        title="Zoom Earth Satellite View"
      />
    </div>
  );
}
