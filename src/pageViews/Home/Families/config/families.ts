type FamiliesItem = {
  name: string
  href: string
  image: {
    src: string
    width: number
    height: number
  }
}

const createFamiliesItem = ({
  name,
  imageSrc,
}: {
  name: string
  imageSrc: string
}): FamiliesItem => {
  return {
    name,
    href: '/',
    image: {
      width: 256,
      height: 313,
      src: `/images/families/${imageSrc}`,
    },
  }
}

export const FAMILIES: ReadonlyArray<FamiliesItem> = [
  createFamiliesItem({
    name: 'Copo descartável para café',
    imageSrc: '0032a1b5-8b30-4e10-a27c-3bd818d2f376.webp',
  }),
  createFamiliesItem({
    name: 'Banco de madeira para 2 pessoas',
    imageSrc: '00577e1d-1c0f-4992-a680-bc29c305202d.webp',
  }),
  createFamiliesItem({
    name: 'Pote de vidro com tampa hermética de bambu',
    imageSrc: '017d432d-cd35-4904-8e67-41f5c9c5a748.webp',
  }),
  createFamiliesItem({
    name: 'Portão de alumínio com pintura preta',
    imageSrc: '01JcuGNckh46ZCkYCnsMO.webp',
  }),
  createFamiliesItem({
    name: 'Puxador para móveis de sobrepor, em metal',
    imageSrc: '023de515-d1dd-4932-b417-08c1d330cc7c.webp',
  }),
  createFamiliesItem({
    name: 'Dupla de manequins de pé, se abraçando',
    imageSrc: '02d2545b-9647-4479-ad93-58fd9bba7550.webp',
  }),
  createFamiliesItem({
    name: 'Tapete para banheiro em formato de arco-íris',
    imageSrc: '02inotk3aqympebaor9clqe.webp',
  }),
  createFamiliesItem({
    name: 'Mesa lateral com 2 prateleiras em madeira da Tok&Stok',
    imageSrc: '02kszSfg8srwF1QO_qpVK.webp',
  }),
  createFamiliesItem({
    name: 'Cabeceira de madeira e palha',
    imageSrc: '02ogkDMYl_6MyV_0bCvol.webp',
  }),
  createFamiliesItem({
    name: 'Secador de cabelo com suporte, para hotel',
    imageSrc: '03024c5f-97df-4c36-a5b2-d9c2b8a7e786.webp',
  }),
  createFamiliesItem({
    name: 'Sofá estofado com estrutura de alumínio, de Lievore Altherr Molina',
    imageSrc: '03384c4d-7b9a-46f7-8e74-3234b2cc02c7.webp',
  }),
  createFamiliesItem({
    name: 'Misturador termostático de parede para ducha',
    imageSrc: '03dd4bd9-e6da-4a0c-accb-8c4902b22c4b.webp',
  }),
  createFamiliesItem({
    name: 'Pacote de diferentes salgadinhos',
    imageSrc: '0491a03e-d431-4f19-bdb2-d9bd01a07422.webp',
  }),
  createFamiliesItem({
    name: 'Gazebo de alumínio com cortinas laterais',
    imageSrc: '04b0cb10-d57c-4524-82a5-598530035518.webp',
  }),
  createFamiliesItem({
    name: 'Cuba de apoio oval, de gumdesign, Nevio Tellatin, Andrea Lupi',
    imageSrc: '06017cce-d9ee-45d3-bf42-88a1a2b47261.webp',
  }),
  createFamiliesItem({
    name: 'Quadro com poster decorativo, de Ayeyokp',
    imageSrc: '07cc8a10-f1d3-41f1-9955-ea1b760bc231.webp',
  }),
  createFamiliesItem({
    name: 'Carrinho aramado de aço para bebidas e decoração',
    imageSrc: '07N3Otv-fTC4aXIyIz2Ym.webp',
  }),
  createFamiliesItem({
    name: 'Cuba retangular em aço inox com escorredor',
    imageSrc: '08bndugsb72aw5l2m3n822n.webp',
  }),
  createFamiliesItem({
    name: 'Spot recuado de embutir para lâmpada mini dicroica MR11',
    imageSrc: '08cbd510-a7e5-4c8a-822b-e84a35c10820.webp',
  }),
  createFamiliesItem({
    name: 'Porta de correr em metal e vidro com roldana aparente',
    imageSrc: '08FQGYDCE-d68FrckE3vZ.webp',
  }),
  createFamiliesItem({
    name: 'Bola de futebol americano',
    imageSrc: '08proahnFb0UJuFGadELe.webp',
  }),
]
