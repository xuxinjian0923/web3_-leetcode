const pro = new Promise((resolve, reject) => {
    const innerpro = new Promise((r, reject) => {
        setTimeout(() => {
            console.log(666)
            r(1)
        });
        console.log(2)
        r(3)
    })
    resolve(4)
    innerpro.then(res=>console.log(res)  )
    console.log('yideng')
})
pro.then(res=>console.log(res)  )
console.log('end')

// Promise的创建是同步的,promise.then是微任务

// 2 yidneg end,先把同步的挑出来

// 找微任务,r(3)和resolve(4)

// 最后setTimeout,但是r(3)强先完成了resolve,r(1)就废掉了

