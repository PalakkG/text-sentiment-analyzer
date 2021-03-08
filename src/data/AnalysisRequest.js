let sentimentsArr = []
async function AnalysisRequest(text) {

    const MonkeyLearn = require('monkeylearn')
    const ml = new MonkeyLearn('91e372eb92e282994e54eb93325b455f799c1a38')
    let model_id = 'cl_pi3C7JiL'
    ml.classifiers.classify(model_id, text).then(res => {
        //console.log(res.body)

        for (const index in res.body) {
            if (res.body[index].classifications) {
                sentimentsArr.push(
                    res.body[index].classifications[0].tag_name,
                    //percentage: res.body[index].classifications[0].confidence
                )
                //console.log(sentiments)
            }
        }
        //console.log(res.body[0]['classifications'][0]['tag_name'])
        //console.log(sentimentsArr)
        return sentimentsArr;
    })
    return sentimentsArr;
}

export default AnalysisRequest;