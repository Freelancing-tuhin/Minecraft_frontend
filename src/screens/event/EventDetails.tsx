import Head from "../../components/shared/Head/Head";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/footer/Footer";
import { api } from "../../utils";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import EventBanner from "../../components/main/eventDetails/evnetBanner/Eventanner";
import EventDescription from "../../components/main/eventDetails/eventdescription/EventDescription";
import ShareModal from "../../components/shared/shareModal/ShareModal";
import AuthContext from "../../contexts/authContext/authContext";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [eventDetail, setEventDetail] = useState<any>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(AuthContext);
  const getEventDetails = async () => {
    setLoading(true);
    try {
      const response = await api.events.getEventDetails({
        eventId: id,
        userId: user?.id,
        // userId: "67e2b75a886e962459042cc9",
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
          <EventBanner
            data={eventDetail}
            isShareModalOpen={isShareModalOpen}
            setIsShareModalOpen={setIsShareModalOpen}
          />
          <EventDescription data={eventDetail} />
          <ShareModal
            data={eventDetail}
            setIsModalOpen={setIsShareModalOpen}
            isShareModalOpen={isShareModalOpen}
          />

          <Footer />
        </section>
      </div>
    </>
  );
};

export default EventDetails;
