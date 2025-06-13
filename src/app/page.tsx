import type { StaticImageData } from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel'

import Image from 'next/image'

interface CardProps {
  id: number
  title: string
  description: string
  image: StaticImageData
}

export default function Home() {
  const cards = [
    {
      id: 1,
      title: 'Dica 1 (Rotas do website)',
      description:
        'Na sua carta você vai encontrar enigmas amor! Para coloca-los é simples. Basta colocar a palavra depois do ultimo "/" da URL',
      image: '/home/card-1.png',
    },
    {
      id: 2,
      title: 'Dica 2 (QR Code)',
      description:
        'Na sua carta vai ter alguns QR Code, eles representam os nossos momentos juntos, e você pode escaneá-los com o celular.',
    },
    {
      id: 3,
      title: 'Dica 3 (Essencial)',
      description:
        'Me ame para sempre, e nunca desista de mim! Você é a minha vida, e eu te amo muito!',
      image: '/home/card-3.jpg',
    },
  ]

  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-10 px-4 py-10 text-center">
      <div>
        <h1 className=" font-bold text-4xl">Hello World!</h1>

        <p className="mt-4 text-center font-semibold text-lg">
          Sim amor, eu falo isso por que você é o meu mundo!
        </p>
      </div>

      <div className="space-y-2">
        <p>
          Como você já deve ter percebido, essa carta é{' '}
          <u className="font-semibold text-pink-300">interativa</u>
        </p>

        <p>
          Nela vão conter meus sentimentos e nossos momentos, eu te amo muito e
          você é a mulher da minha vida!
        </p>

        <p>Vou explicar como vai funcionar, segue o passo a passo:</p>
      </div>

      <div>
        <Carousel className="relative mx-auto flex w-auto lg:max-w-1/2 lg:px-10">
          <div className="relative ">
            <CarouselContent className="flex items-center">
              {cards.map(({ title, description, id, image }) => (
                <CarouselItem key={id}>
                  <Card className="rounded-3xl border-2 border-gray-300/30 ">
                    <CardHeader>
                      <CardTitle className="font-bold text-lg text-yellow-400">
                        {title}
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-500">
                        {description}
                      </CardDescription>
                    </CardHeader>

                    {image && (
                      <CardContent>
                        <Image
                          width={500}
                          height={500}
                          src={image}
                          alt={title}
                          className=" mx-auto max-h-40 w-full rounded-xl object-cover"
                        />
                      </CardContent>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="top-90 right-10" />
            <CarouselPrevious className="top-90 left-10" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
