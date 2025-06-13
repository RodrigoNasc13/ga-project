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
  const cards = [
    {
      description: 'Informações pessoais',
      infos: [
        {
          title: 'Nome',
          value: 'Gabriela de Melo Figueiredo Boer Nascimento',
        },
        {
          title: 'Email',
          value: 'Eu sei 😏',
        },
        {
          title: 'CPF',
          value: 'Eu sei 😏',
        },
        {
          title: 'Endereço',
          value: 'Eu sei 😏',
        },
      ],
    },
    {
      description: 'Educação',
      infos: [
        {
          title: 'Ensino Médio',
          value: 'E. E. Deputado Rubens Paiva',
        },
        {
          title: 'Ensino Superior',
          value: 'Uniasselvi - ADS',
        },
        {
          title: 'Faltas',
          value: '39129380219382',
        },
        {
          title: 'Média notas',
          value: '9.5',
        },
      ],
    },
    {
      description: 'Analise relacionamento',
      infos: [
        {
          title: 'Compensa?',
          value: 'Pra caralho',
        },
        {
          title: 'Linda?',
          value: 'Pra caralho elevado a infinito',
        },
        {
          title: 'Intenção',
          value: 'Casar e raptar 😍',
        },
        {
          title: 'Gabriela',
          value: 'Linda, maravilhosa, incrível e perfeita',
        },
        {
          title: 'Meu',
          value: 'Amor',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4 pt-10 text-center lg:mt-30">
      <h1 className="font-bold text-3xl">Arquivo confidencial</h1>

      <div className="w-full px-2 lg:w-auto">
        <Carousel>
          <div className="mx-auto w-[90%] max-w-[500px] ">
            <CarouselContent className="">
              {cards.map(card => (
                <CarouselItem className="" key={card.description}>
                  <Card>
                    <CardHeader>
                      <CardDescription className="text-xl">
                        {card.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {card.infos?.map(info => (
                        <div
                          key={info.title}
                          className="flex items-center justify-between gap-2 py-2"
                        >
                          <span className="text-nowrap font-semibold">
                            {info.title}:
                          </span>
                          <span className="w-3/4 text-wrap text-gray-600 text-xs">
                            {info.value}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="-right-5 top-40" />
            <CarouselPrevious className="-left-5 top-40" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
