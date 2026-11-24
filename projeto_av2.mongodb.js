use("TechStore_Bianca_Vitoria");

db.Produtos.drop();
db.Pedidos.drop();

db.Produtos.insertOne({
  sku: "CPU-AMD-001",
  nome: "Processador AMD Ryzen 7 7800X3D",
  categoria: "Processadores",
  preco: 2699.9,
  estoque: 15,
  ativo: true,
  tags: ["AMD", "AM5", "Gamer", "3D V-Cache"],
  especificacoes: {
    soquete: "AM5",
    nucleos: 8,
    threads: 16,
    clock_boost_ghz: 5.0,
    tdp_watts: 120,
  },
});

db.Produtos.insertMany([
  {
    sku: "GPU-NV-002",
    nome: "Placa de Vídeo RTX 4070 Super 12GB",
    categoria: "Placas de Vídeo",
    preco: 4199.0,
    estoque: 8,
    ativo: true,
    tags: ["NVIDIA", "Ray Tracing", "DLSS 3", "12GB"],
    especificacoes: {
      chipset: "NVIDIA GeForce",
      vram_gb: 12,
      tipo_memoria: "GDDR6X",
      interface: "PCIe 4.0 x16",
    },
  },
  {
    sku: "MON-LG-003",
    nome: 'Monitor Gamer LG UltraGear 27"',
    categoria: "Monitores",
    preco: 1350.0,
    estoque: 22,
    ativo: true,
    tags: ["IPS", "144Hz", "1ms", "FreeSync"],
    especificacoes: {
      polegadas: 27,
      resolucao: "1920x1080 (Full HD)",
      taxa_atualizacao_hz: 144,
      painel: "IPS",
    },
  },
  {
    sku: "SSD-KIN-004",
    nome: "SSD NVMe Kingston Fury Renegade 1TB",
    categoria: "Armazenamento",
    preco: 649.9,
    estoque: 40,
    ativo: true,
    tags: ["NVMe", "PCIe 4.0", "1TB", "Alta Velocidade"],
    especificacoes: {
      capacidade_gb: 1000,
      leitura_mb_s: 7300,
      gravacao_mb_s: 6000,
      formato: "M.2 2280",
    },
  },
  {
    sku: "PER-LOG-005",
    nome: "Mouse Sem Fio Logitech G Pro X Superlight",
    categoria: "Periféricos",
    preco: 799.0,
    estoque: 0,
    ativo: false,
    tags: ["Wireless", "Esports", "Leve"],
    especificacoes: {
      peso_gramas: 63,
      dpi_maximo: 25600,
      conexao: "Lightspeed Wireless",
    },
  },
]);

db.Pedidos.insertMany([
  {
    codigo_pedido: "PED-2026-101",
    data: new Date("2026-11-10T14:30:00Z"),
    status: "Concluido",
    forma_pagamento: "PIX",
    cliente: {
      nome: "Lucas Mendes",
      email: "lucas.mendes@email.com",
      cidade: "Engenheiro Coelho",
      estado: "SP",
    },
    itens: [
      {
        sku: "CPU-AMD-001",
        nome: "Processador AMD Ryzen 7 7800X3D",
        qtd: 1,
        valor_unitario: 2699.9,
      },
      {
        sku: "SSD-KIN-004",
        nome: "SSD NVMe Kingston Fury Renegade 1TB",
        qtd: 1,
        valor_unitario: 649.9,
      },
    ],
    valor_total: 3349.8,
  },
  {
    codigo_pedido: "PED-2026-102",
    data: new Date("2026-11-12T09:15:00Z"),
    status: "Concluido",
    forma_pagamento: "Cartão de Crédito",
    cliente: {
      nome: "Mariana Silva",
      email: "mari.silva@email.com",
      cidade: "Campinas",
      estado: "SP",
    },
    itens: [
      {
        sku: "GPU-NV-002",
        nome: "Placa de Vídeo RTX 4070 Super 12GB",
        qtd: 1,
        valor_unitario: 4199.0,
      },
    ],
    valor_total: 4199.0,
  },
  {
    codigo_pedido: "PED-2026-103",
    data: new Date("2026-11-15T18:45:00Z"),
    status: "Processando",
    forma_pagamento: "Boleto",
    cliente: {
      nome: "Rafael Costa",
      email: "rafa.costa@email.com",
      cidade: "São Paulo",
      estado: "SP",
    },
    itens: [
      {
        sku: "MON-LG-003",
        nome: 'Monitor Gamer LG UltraGear 27"',
        qtd: 2,
        valor_unitario: 1350.0,
      },
    ],
    valor_total: 2700.0,
  },
  {
    codigo_pedido: "PED-2026-104",
    data: new Date("2026-11-18T11:20:00Z"),
    status: "Cancelado",
    forma_pagamento: "Cartão de Crédito",
    cliente: {
      nome: "Beatriz Almeida",
      email: "bia.almeida@email.com",
      cidade: "Campinas",
      estado: "SP",
    },
    itens: [
      {
        sku: "PER-LOG-005",
        nome: "Mouse Sem Fio Logitech G Pro X Superlight",
        qtd: 1,
        valor_unitario: 799.0,
      },
    ],
    valor_total: 799.0,
  },
  {
    codigo_pedido: "PED-2026-105",
    data: new Date("2026-11-20T16:00:00Z"),
    status: "Concluido",
    forma_pagamento: "PIX",
    cliente: {
      nome: "Pedro Henrique",
      email: "pedro.h@email.com",
      cidade: "Engenheiro Coelho",
      estado: "SP",
    },
    itens: [
      {
        sku: "MON-LG-003",
        nome: 'Monitor Gamer LG UltraGear 27"',
        qtd: 1,
        valor_unitario: 1350.0,
      },
      {
        sku: "SSD-KIN-004",
        nome: "SSD NVMe Kingston Fury Renegade 1TB",
        qtd: 2,
        valor_unitario: 649.9,
      },
    ],
    valor_total: 2649.8,
  },
]);

printjson(db.Produtos.find({ preco: { $gt: 2000 } }).toArray());

printjson(
  db.Produtos.find({
    categoria: { $in: ["Processadores", "Placas de Vídeo"] },
  }).toArray(),
);

printjson(
  db.Produtos.find(
    { ativo: true },
    { _id: 0, nome: 1, preco: 1, estoque: 1 },
  ).toArray(),
);

db.Produtos.updateOne(
  { sku: "PER-LOG-005" },
  {
    $set: {
      preco: 749.9,
      estoque: 12,
      ativo: true,
    },
  },
);

db.Produtos.updateMany(
  { preco: { $gt: 1000 } },
  {
    $set: { promocao_black_friday: true },
  },
);

db.Produtos.updateOne(
  { sku: "MON-LG-003" },
  {
    $push: { tags: "Oferta" },
  },
);

db.Pedidos.deleteMany({ status: "Cancelado" });

printjson(
  db.Pedidos.aggregate([
    {
      $match: { status: "Concluido" },
    },
    {
      $group: {
        _id: "$forma_pagamento",
        faturamento_total: { $sum: "$valor_total" },
        total_pedidos: { $sum: 1 },
      },
    },
    {
      $sort: { faturamento_total: -1 },
    },
  ]).toArray(),
);

printjson(
  db.Pedidos.aggregate([
    {
      $match: { status: "Concluido" },
    },
    {
      $group: {
        _id: "$cliente.cidade",
        receita_bruta: { $sum: "$valor_total" },
        ticket_medio: { $avg: "$valor_total" },
        qtd_compras: { $sum: 1 },
      },
    },
    {
      $sort: { receita_bruta: -1 },
    },
    {
      $project: {
        _id: 0,
        Cidade: "$_id",
        Total_Vendido_R$: { $round: ["$receita_bruta", 2] },
        Ticket_Medio_R$: { $round: ["$ticket_medio", 2] },
        Quantidade_Pedidos: "$qtd_compras",
      },
    },
  ]).toArray(),
);
