
说明：以下的一系列操作都是在ubuntu系统下进行；

# 获取jQuery版本库

为了了解jQuery的神奇，决定阅读jQuery的源码，从github通过

```
git clone https://github.com/jquery/jquery.git
```

获取jQuery的版本库；

希望了解jQuery的 “出生”、“发展”，所以决定将jQuery的版本回退到最起始的tag，cd到从github克隆下来的jquery目录，通过命令：

```
git tag
```

查看所有的版本标记，其显示如下：
```
1.0
1.0.1
1.0.2
1.0.3
1.0.4
1.0a
1.1
... 中间版本略 ...
3.1.0
3.1.1
3.2.0
3.2.1
```
可见，jquery从1.0版本不断发展，目前为止最新版本已经发展到v3.2.1；

通过命令：
```
git checkout 1.0
```
将jquery的版本回退到最初；


# 查看v1.0版本的目录结构

在jquery目录中使用命令 `tree . ` 即可打印出jquery的目录结构，结果如下；
```
.
├── build
│   ├── build
│   │   ├── build.js
│   │   ├── lite.js
│   │   └── pack.js
│   ├── docs
│   │   ├── docs.js
│   │   ├── gen-events.pl
│   │   ├── js
│   │   │   ├── doc.js
│   │   │   ├── pager.js
│   │   │   └── tooltip.js
│   │   └── style
│   │       ├── docs.xsl
│   │       └── style.css
│   ├── js
│   │   ├── json.js
│   │   ├── pack.js
│   │   ├── parse.js
│   │   ├── ParseMaster.js
│   │   ├── writeFile.js
│   │   └── xml.js
│   ├── js.jar
│   └── test
│       ├── index.html
│       ├── js
│       │   └── test.js
│       └── test.js
├── build.xml
├── GPL-LICENSE.txt
├── Makefile
├── MIT-LICENSE.txt
├── README
└── src
    ├── ajax
    │   └── ajax.js
    ├── event
    │   └── event.js
    ├── fx
    │   └── fx.js
    └── jquery
        └── jquery.js

13 directories, 29 files
```



几种常用的开源协议比较：



```
SRC_DIR = src
BUILD_DIR = build

PREFIX = .
DOCS_DIR = ${PREFIX}/docs
TEST_DIR = ${PREFIX}/test
DIST_DIR = ${PREFIX}/dist

MODULES = ${SRC_DIR}/jquery/*\
	${SRC_DIR}/event/*\
	${SRC_DIR}/fx/*\
	${SRC_DIR}/ajax/*

JQ = ${DIST_DIR}/jquery.js
JQ_LITE = ${DIST_DIR}/jquery.lite.js
JQ_PACK = ${DIST_DIR}/jquery.pack.js

JAR = java -jar ${BUILD_DIR}/js.jar

all: jquery lite pack docs test
	@@echo "jQuery build complete."

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

jquery: ${DIST_DIR} ${JQ}

${JQ}: ${MODULES}
	@@echo "Building" ${JQ}

	@@mkdir -p ${DIST_DIR}
	@@cat ${MODULES} > ${JQ};

	@@echo ${JQ} "Built"
	@@echo

lite: ${JQ_LITE}

${JQ_LITE}: ${JQ}
	@@echo "Building" ${JQ_LITE}

	@@echo " - Removing ScriptDoc from" ${JQ}
	@@${JAR} ${BUILD_DIR}/build/lite.js ${JQ} ${JQ_LITE}

	@@echo ${JQ_LITE} "Built"
	@@echo

pack: ${JQ_PACK}

${JQ_PACK}: ${JQ}
	@@echo "Building" ${JQ_PACK}

	@@echo " - Compressing using Packer"
	@@${JAR} ${BUILD_DIR}/build/pack.js ${JQ} ${JQ_PACK}

	@@echo ${JQ_PACK} "Built"
	@@echo

test: ${JQ}
	@@echo "Building Test Suite"

	@@echo " - Making Test Suite Directory:" ${TEST_DIR}
	@@mkdir -p ${TEST_DIR}
	@@mkdir -p ${TEST_DIR}/tests/

	@@echo " - Removing any old tests"
	@@rm -f ${TEST_DIR}/tests/*

	@@echo " - Copying over script files."
	@@cp -fR ${BUILD_DIR}/test/js ${TEST_DIR}/js

	@@echo " - Compiling Test Cases"
	@@${JAR} ${BUILD_DIR}/test/test.js ${JQ} ${TEST_DIR}

	@@echo "Test Suite Built"
	@@echo

docs: ${JQ}
	@@echo "Building Documentation"

	@@echo " - Making Documentation Directory:" ${DOCS_DIR}
	@@mkdir -p ${DOCS_DIR}
	@@mkdir -p ${DOCS_DIR}/data

	@@echo " - Copying over script files."
	@@cp -fR ${BUILD_DIR}/docs/js ${DOCS_DIR}/js

	@@echo " - Copying over style files."
	@@cp -fR ${BUILD_DIR}/docs/style ${DOCS_DIR}/style

	@@echo " - Extracting ScriptDoc from" ${JQ}
	@@${JAR} ${BUILD_DIR}/docs/docs.js ${JQ} ${DOCS_DIR}

	@@echo "Documentation Built"
	@@echo

clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}

	@@echo "Removing Test Suite directory:" ${TEST_DIR}
	@@rm -rf ${TEST_DIR}

	@@echo "Removing Documentation directory:" ${DOCS_DIR}
	@@rm -rf ${DOCS_DIR}
```