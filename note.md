# 控制器 controller
控制器负责处理传入请求 并想客户端返回响应
控制器的目的是接收应用的特定请求 路由机制控制哪个控制器接收哪些请求。 通常每个控制器都有不止一条路由 并且不同的路由可移执行不同的操作
为了创建基本控制器， 可以使用类和装饰器、 装饰器将类与所需的元数据相关联 并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）

## 路由
使用 @controller() 装饰器是定义基本控制器所需的 可以在 controller() 装饰器中使用路径前缀 (controller('list')) 可以很容桂的对一组相关路由进行分组

 @Get('info') // 与前面装饰器的前缀 /list 组合映射为 GET /list/info 

## 请求对象
通过 @Req() 装饰器添加到处理程序的签名来只是Nest注入他来访问请求对象 （Nest 提供对底层平台请求对象的访问 默认为Express）

## 标头
自定义响应标头使用 @Header() 装饰器或库特定的响应对象 （并直接调用res.header()）

## 重定向
重定向使用@Redirect() 装饰器 或特定的响应对象 （并直接调用res.redirect()）
redirect() 有两个参数 url ，statusCode 都是可选项 statusCode默认值为302

## 路由参数 
动态路由参数 作为请求的一部分 获取params 使用@Param()
``` javascript
 @Get(list/:id) 
 findOne(#Param() params: any): string {
    console.log(params.id)
    return `#{params.id}`
 }
 ```

## 请求负载
如果用TS 就得用 DTO 的数据传输对象架构

create-list/dto.ts

``` javascript
export class CreateListDto {
  name: string;
  age: number;
  breed: string;
}

@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```

## 启动运行
控制器始终是属于一个模块 所以需要要包含在 @Module() 装饰器的数组中


# 提供器
许多基本的Nest类可以被视为 提供器-服务、存储库、工厂、助手等等 提供器重要思想就是可以作为依赖注入

## 服务
此处可以用于 负责存储数据和进行检索 并提供给Controller使用 所以叫做提供器
（使用 CLI创建服务-- nest g service name）



# 模块
模块是 @Module 装饰器注释的类 @Module装饰器提供Nest用于组织应用结构的元数据
每个应用至少有一个模块

