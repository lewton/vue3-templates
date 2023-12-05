export const modules = import.meta.glob('@/views/**/*.vue')

export const getImportComponent = (path) => {
  return modules[`/src/views/${path}`]
}
/**
 * 根据用户权限来动态添加路由
 */
// import { kebabCase } from '@/utils'

// function createRouteTree(path, name, component, children = []) {
//   return {
//     [name]: {
//       path,
//       name,
//       component,
//       children
//     }
//   }
// }

// // {
// //   [name1]: {
// //     route: object,
// //     [name2]: {
// //       route: object,
// //       [name3]: {
// //         route: object,
// //       }
// //     }
// //   }
// // }

// // const tree =

// // 考虑多棵树来实现，一个路由分支就相当于一棵树
// // 数据结构如下： [tree, tree, tree, tree]
// const routes = Object.keys(modules).reduce((r, p) => {
//   const [, t] = p.match(/.*views\/(.+)\.vue/)

//   const path = t.split('/').map(kebabCase).join('/')
//   // const route = {
//   //   path: `/${l.join('/')}`,
//   //   name:
//   // }
// }, [])

// console.log(modules)

// /**
//  * views 作为路由映射页面
//  * 规则：每个路由必须对应一个文件夹
//  *      home/HomeView.vue
//  *
//  */
