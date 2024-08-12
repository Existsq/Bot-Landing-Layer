import NextMessage from "@/components/ticket/NextMessage";
import SimpleMessage from "@/components/ticket/SimpleMessage";
import TitleBar from "@/components/ticket/TitleBar";
import Divider from "@/components/ticket/Divider";
import ChannelStarter from "@/components/ticket/ChannelStarter";
import ArchiveInfoFooter from "@/components/ticket/ArchiveInfoFooter";

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
