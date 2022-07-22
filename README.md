# fisher_site

## dampingなしでresnet18を訓練した場合の各種値

- Aの条件数の最大値: 16781442809856.0  epoch:  77  name:  layer4.1.conv2
- Bの条件数の最大値: 467.2051086425781  epoch:  53  name:  conv1
- Aの最小値: 4.003073527584321e-21  epoch:  99  name:  layer4.1.conv2
- Bの最小値: 3.206492782213162e-24  epoch:  99  name:  layer4.0.conv2
- Aの最大値: 3.9661827087402344  epoch:  4  name:  layer4.0.shortcut.0
- Bの最大値: 1.368059754371643  epoch:  53  name:  conv1

## dampingありでresnet18を訓練した場合の各種値(damping = 1e-2)

- Aの条件数の最大値: 538499.8125  epoch:  3  name:  layer4.0.conv1
- Bの条件数の最大値: 355.03863525390625  epoch:  45  name:  conv1
- Aの最小値: 9.807213608672378e-20  epoch:  99  name:  layer1.0.conv1
- Bの最小値: 2.3214590830234883e-23  epoch:  99  name:  conv1
- Aの最大値: 3.904448986053467  epoch:  4  name:  layer4.0.conv1
- Bの最大値: 0.7531530261039734  epoch:  43  name:  conv1

## eigenA

Aの固有値分布．

epochx.pdfはxエポック目の固有値分布であることを表す．
上のグラフは，固有値分布であり，下のグラフはn番目の固有値の大きさをplotしている．

## eigenB

Bの固有値分布．

epochx.pdfはxエポック目の固有値分布であることを表す．
上のグラフは，固有値分布であり，下のグラフはn番目の固有値の大きさをplotしている．

## value_dist

AとBの値の分布．
epochx.pdfはxエポック目の値の分布であることを表す．

## epoch_graph

各層における各種統計量の値の推移をplotしている．

- A_cond : Aの条件数の推移
- B_cond : Bの条件数の推移
- max_A_eig : Aの最大固有値の推移
- min_A_eig : Aの最小固有値の推移
- max_B_eig : Bの最大固有値の推移
- min_B_eig : Bの最小固有値の推移
- max_A : Aの値の最大値の推移
- min_A : Aの値の最小値の推移
- max_B : Bの値の最大値の推移
- min_B : Bの値の最小値の推移
