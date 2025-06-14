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

export default function Knive() {
  const cards = [
    {
      id: 1,
      title: 'soninho do momozi ❤️',
      description:
        'Te ver dormindo é uma dadiva, você é tão linda quanto o sol que acaba de nascer, todos os dias acordando ao seu lado é um privilégio que eu nunca pensei que teria.',
      image: '/monkey/sleep-1.jpeg',
    },
    {
      id: 2,
      title: 'Vidão da porra',
      description:
        'Essa imagem representa paz e felicidade, vou lutar sempre para termos momentos assim! ❤',
      image: '/monkey/image-3.jpeg',
    },
    {
      id: 3,
      title: 'Happy momentos',
      description:
        'So de estar do seu lado é motivo para sorrir, compartilhamos os poucos neurônios que temos e somos felizes assim ❤️',
      image: '/monkey/image-5.jpeg',
    },
    {
      id: 4,
      title: 'BICÃOOOOOOO',
      description:
        'QUE BOCHECHINHA MAIS LINDINHAAAAA, MEU DEUSO, COMO EU TE AMO, NAMORA EU PRA SEMPRE POR FAVOR',
      image: '/monkey/image-4.jpeg',
    },
    {
      id: 5,
      title: 'Sleep family',
      description:
        'E essa é minha família, linda, tranquila e fofa. Eu amo vocês e volto a dizer que você e a Amelie são enguais 😍😍',
      image: '/monkey/sleep-2.jpeg',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4 pt-10 text-center">
      <div className="flex flex-col gap-6 lg:gap-8">
        <h1 className="font-bold text-3xl">Descobrindo o amor</h1>

        <p>
          O amor é um sentimento engraçado amor, como se fosse uma montanha
          russa mesmo, tem altos e baixos em velocidades estratosféricas
        </p>

        <p>
          Mas mesmo o amor sendo assim, nos sempre conseguimos nos equilibrar,
          porque no final o que importa é estarmos juntos, apoiando um ao outro
        </p>

        <p>
          E falando de amor, eu quero te dedicar uma musica, uma musica muito
          especial, que fala sobre o amor. Te dedico ela com o meu coração.{' '}
        </p>

        <iframe
          title="Musica do amor"
          className="mx-auto w-full rounded-lg lg:w-2/3"
          src="https://open.spotify.com/embed/track/6hFKP7kl22184msxWDhXLL?utm_source=generator"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <div className="relative mb-30">
        <Heart className="size-30 animate-ping text-red-400 lg:size-52 " />

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

          <DialogContent className="flex h-[80vh] w-[90vw]">
            <Carousel className="w-full">
              <CarouselContent>
                {cards.map(({ description, id, image, title }) => (
                  <CarouselItem className="flex flex-col gap-6 " key={id}>
                    <DialogHeader>
                      <DialogTitle className="text-center lg:text-2xl">
                        {title}
                      </DialogTitle>
                      <DialogDescription className="text-center lg:text-base">
                        {description}
                      </DialogDescription>
                    </DialogHeader>

                    <Image
                      className="h-1/2 w-full object-cover lg:h-3/4 "
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
