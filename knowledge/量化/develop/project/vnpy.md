



# https://toscode.gitee.com/vnpy/vnpy_spreadtrading/issues/I6KS5A

1、AttributeError: 'PySide6.QtWidgets.QDockWidget' object has no 
attribute 'DockWidgetFloatable'. Did you mean: 'DockWidgetFeature'?  
解决办法：mainwindow.py修改为 dock.setFeatures(dock.DockWidgetFeature.DockWidgetFloatable | dock.DockWidgetFeature.DockWidgetMovable)  
2、AttributeError: 'TickMonitor' object has no attribute 'NoEditTriggers'. Did you mean: 'editTriggers'?  
解决办法：widget.py修改为：self.setEditTriggers(self.EditTrigger.NoEditTriggers)









https://github.com/vnpy/vnpy_ctabacktester/issues/22



已经解决了：  
1）QtWidgets 是pyside6里面的  
from PySide6 import QtGui, QtWidgets, QtCore  
所以降级 pyside6 from 6.4 to 6.3.2  
没有报错了

建议：  
vnpy repo 的 setup.cfg install_requires 里面的包都加上一个版本号（锁定测试过的版本）  
这样不会在升级以后出现不可预知的问题




