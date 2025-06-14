import { Button } from '@/src/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog'
import { Heart } from 'lucide-react'
import Image from 'next/image'

export default function Kanto() {
  const cards = [
    {
      id: 1,
      title: 'Tivemos paparazzi',
      description:
        'Amor, espero estar sempre ao seu lado, e que possamos viver muitas aventuras juntos. Você é a minha vida, e eu te amo muito!',
      image: '/knife/card-1.jpeg',
    },
    {
      id: 2,
      title: 'Que filme ruim',
      description:
        'O filme que assistimos foi uma catástrofe, mas você estava lá para me confortar, nunca pensei que uma pessoa pudesse ser tão incrível quanto você!',
      image: '/knife/card-2.jpeg',
    },
    {
      id: 3,
      title: 'Ironia do destino',
      description:
        'Muito irônico pensar que enquanto eu estava te mostrando o meu wallpaper de Pokemon, você tinha uma faca na bolsa, so podia ser amor 😍😍😍',
      image: '/knife/card-3.jpeg',
    },
  ]

  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center gap-10 px-4 pt-10 text-center">
      <h1>
        Desde o nosso primeiro encontro juntos eu sabia que você era{' '}
        <strong>Especial</strong>
      </h1>

      <p>
        Me fazia rir e me deixava seguro de ser eu mesmo. Simplesmente o{' '}
        <strong>amor</strong> em pessoa
      </p>

      <p>
        Obrigado por ter dado aquele match entre no Tinder, ele mudou a minha
        vida para melhor, e eu sou muito grato por isso!
      </p>

      <div className="relative">
        <Heart className="size-30 animate-ping text-red-400 lg:size-52" />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="-translate-x-1/2 absolute top-1/3 left-1/2 cursor-pointer"
              variant="outline"
            >
              {' '}
              Clique aqui se me ama ❤
            </Button>
          </DialogTrigger>

          <DialogContent className="flex w-[90vw] lg:max-w-1/2">
            <Carousel>
              <CarouselContent>
                {cards.map(({ description, id, image, title }) => (
                  <CarouselItem className="flex flex-col gap-6" key={id}>
                    <DialogHeader>
                      <DialogTitle className="text-center text-2xl">
                        {title}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {description}
                      </DialogDescription>
                    </DialogHeader>

                    <Image
                      className="mx-auto"
                      src={image}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNext className="right-0 z-[100] size-14 text-yellow-300" />
              <CarouselPrevious className="left-0 z-[100] size-14 text-yellow-300" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
