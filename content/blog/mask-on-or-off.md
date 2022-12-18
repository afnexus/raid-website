---
title: "Mask On/Off?"
tags: "Yolov4, python, opencv"
date: "2022-11-24"
author: "KM"
---

## Project Overview

Main Article: [Here](https://medium.com/towards-data-science/detecting-mask-on-off-or-incorrectly-worn-using-yolo-v4-c27911e4eadd)
In light of covid-19 pandemic, Masks and Personal Protection Equipment (PPE) serves to be one of the best protection against the COVID-19 virus. Masks are one of the most commonly available PPE however, its effectiveness deteriorates if not worn properly. Therefore, by creating an CV algorithm that is able to detect whether mask are worn, worn incorrectly or not worn at all would help to serve the community better. The model has to react fast therefore requiring lesser computational power than computationally heavy model. this makes Yolov4 an ideal algorithm. Yolov4 has consisitently higher average precision at real-time detection(FPS: > 45). In addition Yolov4 is a one-stage object detector thus making it computationally lighter. For more information on Yolov4 perfomance refer to [this](https://blog.roboflow.com/pp-yolo-beats-Yolov4-object-detection/)

### Target Classes

- `with_mask `​: Mask worn properly
- `without_mask `​: Mask not worn
- `mask_weared_incorrect `​: Mask worn, but incorrectly

# Sypnopsis of the problem.

- **Dataset**: [https://www.kaggle.com/andrewmvd/face-mask-detection](https://www.kaggle.com/andrewmvd/face-mask-detection)
- **Image detection and classification**: The algorithm will determine if a detected face is wearing mask, wearing mask incorrectly or not wearing mask at all. The evaluation criteria is Mean Average Precision (MAP).

# CV_Yolov4_final.ipnyb

Exploratory data analysis file on the original dataset shows that there is a class imbalance. Since this is a tutorial, I have included 100 additional data for mask_worn_incorrect so as to reduce the overall class imbalance. In reality however, we would be introducing more data to reduce the overall class imbalance.

![Image of results](https://github.com/kmt112/probable-lamp/blob/master/EDA_class%20inbalance.png?raw=true)

CV_Yolov4 notebook converts .xml file into Yolov4 format. In addition, CV_Yolov4 notebook generates data into train/validation split. The code also shifts the necessary file cloned into the respective folders. Finally, darknet is being compiled and run. Weight are generated over 6000 iterations and the best weights are saved in google drive.

# Gitclone

There are three seperate repos that were cloned to create the algorithm.

## 1. https://github.com/kmt112/probable-lamp

Contains configuration file obj.data, obj.names and config.cfg file that is required. Change config.cfg backup folder location according to where you want to store the backup weights.

- `train`​: locate train.txt folder, this is the data that Yolov4 is training on. remember that .txt file has to be based in Yolov4 format.
- `valid `​: locate valid.txt folder, this is the data that Yolov4 is validating on and subsequently giving the Mean Average Precision.
- `config.cfg `​: base configuration file of Yolov4. However some data augmentation parameters were introduced when training the model. Source : [https://arxiv.org/pdf/2004.10934.pdf](https://arxiv.org/pdf/2004.10934.pdf)

### Data Augementation (located in config.cfg)

- `width/height `​: changed the resolution size to 416, increasing the width and height of Yolov4 improves the resolution.
- `batches `​: when batches are divided by subdivision, this determines the number of images that will be processes in parallel.
- `satuation = 1.5, Hue = 1.5 `​: Changes the satuation and hue
- `mosaic = 1 `​: Mosaic data augementation combines 4 training images into one in certain ratios (instead of two in cutmix). This prevents over-reliance on any key features.
- `blur = 1 `​: blur will be applied randomly in 50% of the time.
- `jitter = 0.3`​: randomly changes size of image and its aspect ratio.

## 2. https://github.com/AlexeyAB/darknet

Contains all the makefile and all other relevant folders required to run, compile and save the results of the custom object detector.

- `Makefile`​: Before compiling the makefile, i changed `OPENCV = 1` and `GPU = 1`
- `darknet/chart.png?raw=true`​: the chart consists of MAP and losses after every iteration. MAP and losses are obtained through the validation dataset. A total of 6,000 iterations has been done and the best weights have been saved at 5,800 iterations.

## 3. https://github.com/Cartucho/OpenLabeling (run on terminal (e.g. command prompt/ubuntu)

In order to supplement more data for the class imbalances, I have added another data [repo](https://github.com/cabani/MaskedFace-Net). The data taken from the above repo would require you to physically add a bounding box label it accordingly.

## Running of darknet Yolov4.

Download pre-trained weights from COCO dataset for transfer learning. This is only used in the first iteration, thereafter you will use the pre-trained weights that your model have saved.

```sh
!wget https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/Yolov4.conv.137
```

Compile file by running the following cell

```sh
!make
```

execute darknet

```sh
!chmod +x ./darknet
```

Initial Training of model

```sh
!./darknet detector train data/obj.data /content/darknet/cfg/Yolov4-obj.cfg Yolov4.conv.137 -dont_show -map
```

Picking up from last saved

```sh
!./darknet detector train data/obj.data cfg/Yolov4-obj.cfg /content/drive/MyDrive/Yolov4-obj_2700.weights -dont_show -map
```

Validation of dataset

```sh
!./darknet detector valid data/obj.data cfg/Yolov4-obj.cfg /content/drive/MyDrive/Yolov4-obj_oldbest.weights -dont_show -map
```

# Results

![Final Chart](https://github.com/kmt112/probable-lamp/blob/master/results/Final%20Chart%202.jpg?raw=true)

![Final Chart](https://github.com/kmt112/probable-lamp/blob/master/results/Final%20Chart.png?raw=true)

The initial model(top) was trained with the default data, the latter model was retrained with new data inclusion. The latter model trained on more data took a longer time to achieve steady mAP over the iterations. Both model performed better than expected at the best validation of mAP ~98%.

## mAP vs IOU treshhold

As IOU treshhold increases, average precision drops. However, the latter model that was trained on a newer dataset performed significantly better at predicting `mask_weared_incorrect`. This is of course expected as the newer weights have learnt from more data. The results shows that by introducing more data on imbalanced classes will improve the overall prediction of the model.

![Old_mask_1](https://github.com/kmt112/probable-lamp/blob/master/results/table%20results.PNG?raw=true)

## Prediction of sample images

Exhibit 1. Validation on old weights (above) and new weights (below)

![Old_mask_1](https://github.com/kmt112/probable-lamp/blob/master/results/Mask_incorrect_29_old.jpg?raw=true) ![New mask_1](https://github.com/kmt112/probable-lamp/blob/master/results/Mask_incorrect_29_new.jpg?raw=true)

Exhibit 2. Validation on old weights (above) and new weights (below)

![Old_mask_2](https://github.com/kmt112/probable-lamp/blob/master/results/Mask_incorrect_99_old.jpg?raw=true) ![New mask_2](https://github.com/kmt112/probable-lamp/blob/master/results/mask_incorrect_99_new.jpg?raw=true)

Exhibit 3. Validation on old weights (above) and new weights (below)

![Mask Incorrect Old](<https://github.com/kmt112/probable-lamp/blob/master/results/mask%20incorect%20(old).png?raw=true>)
![Mask Incorrect New](<https://github.com/kmt112/probable-lamp/blob/master/results/mask%20incorect%20(New).jpg?raw=true>)

The various exhibits show that with the inclusion of new data, especially on the inbalanced classes, greatly improves the precision of the model.

## License

MIT
Darknet Yolov4
