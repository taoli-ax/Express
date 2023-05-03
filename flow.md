### home position check : pick and place handling `起始位置检查：拾取和放置处理`


> *is pick and place handling over rotary indexing table with gripper opend?是否在夹具打开的情况下,在旋转分度台上进行拾取和放置处理？？*
> *variable: overRotaryIndexingTableGrpWP*


1. close Part Gripper and get Part `关闭零件夹持器并获取零件`
2. parrt gripped over Rotary Indexing Table Set start to ScrewAndUnload to open part `夹在旋转分度台上 设置开始拧紧并卸载到打开部分`
3. gripper wait for Screw and Unload Part gripper opened `夹持器等待螺钉和卸载部件夹持器打开`
4. Vertical Cylinder Z-stroke to HP `立式气缸 Z 冲程至 HP`
5. part gripped anf over Rotary Indexing Table Set start to ScrewAndUnload part gripper free `零件夹在旋转分度台上 设置开始拧紧并卸载零件夹持器`
6. Horizontal Cylinder Pick and Place Handling Y-stroke to HP `水平气缸拾取和放置处理 Y 行程至 HP`


> *is pick and place over rotary indexing table with gripper opend?在夹具关闭的情况下，是否在旋转分度台上拾取和放置？*
>
> *variable: overRotaryIndexingTableGrpHP*



1. open Part Gripper `开放式零件夹持器`
2. Vertical Cylinder Z-stroke to HP `立式气缸 Z 冲程至 HP`
3. Horizontal Cylinder Pick and Place Handling Y-stroke to HP `水平气缸拾取和放置处理 Y 行程至 HP`


> *pick and place handling in home position with gripper closed 在夹具关闭的情况下将拾取和放置处理装置置于初始位置*
>
> *variable: bhandlingInHpGrpClosed 处理原位夹持器关闭*

1. Vertical Cylinder Z-stroke to HP `立式气缸 Z 冲程至 HP`
2. close Part Gripper and get Part `关闭零件夹持器并获取零件`
3. Horizontal Cylinder Pick and Place Handling Y-stroke to HP `水平气缸拾取和放置处理 Y 行程至 HP`


> *pick and place handling in home position with gripper opend 在夹具打开的情况下将拾取和放置处理装置置于初始位置*
>
> *variable: bhandlingInHpGrpOpend 处理原位夹持器打开*

1. Vertical Cylinder Z-stroke to HP `立式气缸 Z 冲程至 HP`
6. open Part Gripper and get Part `打开零件夹持器并获取零件`
7. Horizontal Cylinder Pick and Place Handling Y-stroke to HP `水平气缸拾取和放置处理 Y 行程至 HP`
