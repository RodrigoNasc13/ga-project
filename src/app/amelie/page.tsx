import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/src/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel'

export default function Cage() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4 pt-10 text-center lg:mt-30">
      <h1 className="font-bold text-3xl">Vídeo Final</h1>

      <div className="h-screen w-full px-2 lg:size-[600px] ">
        <iframe
          className="mx-auto h-3/4"
          src="https://www.youtube.com/embed/4qfetfvRUbg"
          title="13 de junho de 2025"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}
