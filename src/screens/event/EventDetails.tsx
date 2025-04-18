import Head from "../../components/shared/Head/Head";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/footer/Footer";
import { api } from "../../utils";
import { useEffect, useState } from "react";
import EventBanner from "../../components/main/eventDetails/evnetBanner/Eventanner";

const EventDetails = () => {
  const [eventDetail, setEventDetail] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getEventDetails = async () => {
    setLoading(true);
    try {
      const response = await api.events.getEventDetails({
        eventId: "67e3d3b7633052ca0f50a7b4",
        userId: "67e2b75a886e962459042cc9",
      });
      console.log("======>event details", response);
      setEventDetail(response);
    } catch (error: any) {
      console.log("Error fetching event details:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventDetails();
  }, []);

  return (
    <>
      <Head />

      <div className="">
        <Navbar isStickyTrue={true} />
        <section
          data-w-id="5f9cc665505a9a8ec46d478c"
          className="body pt-16 sm:pt-28"
        >
          <EventBanner data={eventDetail} />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default EventDetails;
