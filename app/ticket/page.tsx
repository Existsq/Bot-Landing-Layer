import NextMessage from "@/components/NextMessage";
import SimpleMessage from "@/components/SimpleMessage";
import TitleBar from "@/components/TitleBar";
import Divider from "@/components/Divider";
import ChannelStarter from "@/components/ChannelStarter";
import ArchiveInfoFooter from "@/components/ArchiveInfoFooter";

export default function Ticket() {
  return (
    <main>
      <header className=" top-0 sticky z-[1]">
        <TitleBar></TitleBar>
      </header>

      <ChannelStarter></ChannelStarter>
      <Divider></Divider>

      <section id="message-area" className="overflow-x-auto pb-20">
        <SimpleMessage></SimpleMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <SimpleMessage></SimpleMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <SimpleMessage></SimpleMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <SimpleMessage></SimpleMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <SimpleMessage></SimpleMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
        <NextMessage></NextMessage>
      </section>

      <footer className="bottom-0 fixed w-full">
        <ArchiveInfoFooter></ArchiveInfoFooter>
      </footer>
    </main>
  );
}
