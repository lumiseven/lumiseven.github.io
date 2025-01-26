import{_ as p,c as i,o as l,a}from"./app.413235d3.js";const b=JSON.parse('{"title":"机器学习十大算法的优缺点","description":"","frontmatter":{},"headers":[],"relativePath":"doc/ai/ml_top_10_algorithms_advantages_disadvantages.md","lastUpdated":1696761567000}'),o={name:"doc/ai/ml_top_10_algorithms_advantages_disadvantages.md"},e=a('<h1 id="机器学习十大算法的优缺点" tabindex="-1">机器学习十大算法的优缺点 <a class="header-anchor" href="#机器学习十大算法的优缺点" aria-hidden="true">#</a></h1><h2 id="逻辑回归" tabindex="-1">逻辑回归 <a class="header-anchor" href="#逻辑回归" aria-hidden="true">#</a></h2><p>二项logistic回归模型是一种分类模型，由条件概率分布<code>P(Y|X)</code>表示，形式为参数化的logistic分布。这里随机变量X取值为实数，随机变量Y取值为1或0。可以通过有监督的方法来估计模型参数。</p><p>优点：</p><ol><li>计算代价不高，易于理解和实现；</li><li>适用于需要得到有分类概率额场景；</li><li>对小数据噪声的鲁棒性好，不会收轻微的多重共线性的影响</li></ol><p>缺点：</p><ol><li>容易欠拟合，分类精度可能不高；</li><li>数据有缺失和特征很大的时候表现不好</li></ol><h2 id="支持向量机" tabindex="-1">支持向量机 <a class="header-anchor" href="#支持向量机" aria-hidden="true">#</a></h2><p>对于两类线性可分学习任务，SVM找到一个间隔最大的超平面将两类样本分开，最大间隔能够保证该超平面具有最好的泛化能力。</p><ul><li>优点：</li></ul><ol><li><p>可以解决小样本情况下的ML问题；</p></li><li><p>可以提高泛化性能</p></li><li><p>可以解决高维问题，避免维数灾难</p></li><li><p>可以解决非线性问题</p></li><li><p>可以避免神经网络结构选择和局部极小点问题</p></li></ol><p>参数C和g的选择对分类性能的影响：</p><p>C是惩罚系数，C越大，交叉validation高，容易过学习；</p><p>g是核函数的到达0的速率，g越小，函数下降快，交叉validation高，也容易造成过学习。</p><ul><li>缺点：</li></ul><ol><li><p>对缺失数据敏感；</p></li><li><p>对非线性问题没有通用解决方案，必须谨慎选择kernel function来处理</p></li></ol><p>SVM算法的主要优点有：</p><ol><li><p>解决高维特征的分类问题和回归问题很有效,在特征维度大于样本数时依然有很好的效果。</p></li><li><p>仅仅使用一部分支持向量来做超平面的决策，无需依赖全部数据。</p></li><li><p>有大量的核函数可以使用，从而可以很灵活的来解决各种非线性的分类回归问题。</p></li><li><p>样本量不是海量数据的时候，分类准确率高，泛化能力强。</p></li></ol><p>SVM算法的主要缺点有：</p><ol><li><p>如果特征维度远远大于样本数，则SVM表现一般。</p></li><li><p>SVM在样本量非常大，核函数映射维度非常高时，计算量过大，不太适合使用。（不适用于大数据集）</p></li><li><p>非线性问题的核函数的选择没有通用标准，难以选择一个合适的核函数。</p></li><li><p>SVM对缺失数据敏感。</p></li></ol><h2 id="决策树" tabindex="-1">决策树 <a class="header-anchor" href="#决策树" aria-hidden="true">#</a></h2><p>一种启发式算法，核心是在决策树各个节点上应用信息增益等准则来选取特征，进而递归地构造决策树。</p><p>优点：</p><ol><li><p>计算复杂度不高，易于理解和解释，可以理解决策树所表达的意义；</p></li><li><p>数据预处理阶段比较简单，且可以处理缺失数据；</p></li><li><p>能够同时处理数据型和分类型属性，且可对有许多属性的数据集构造决策树；</p></li><li><p>是一个白盒模型，给定一个观察模型，则根据所产生的决策树很容易推断出相应的逻辑表达式</p></li><li><p>在相对短的时间内能够对大数据集合做出可行且效果良好的分类结果。</p></li><li><p>可以对有许多属性的数据集构造决策树。</p></li></ol><p>缺点：</p><ol><li><p>对于那些各类别样本数目不一致的数据，信息增益的结果偏向于那些具有更多数值的属性；</p></li><li><p>对噪声数据较为敏感；</p></li><li><p>容易出现过拟合问题；</p></li><li><p>忽略了数据集中属性之间的相关性；</p></li><li><p>处理缺失数据时的困难</p></li></ol><p>决策树优点：</p><p>1）简单直观，生成的决策树很直观。</p><p>2）基本不需要预处理，不需要提前归一化，处理缺失值。</p><p>3）使用决策树预测的代价是O(log_2m)。m为样本数。</p><p>4）既可以处理离散值也可以处理连续值。很多算法只是专注于离散值或者连续值。</p><p>5）可以处理多维度输出的分类问题。</p><p>6）相比于神经网络之类的黑盒分类模型，决策树在逻辑上可以得到很好的解释</p><p>7）可以交叉验证的剪枝来选择模型，从而提高泛化能力。</p><p>8）对于异常点的容错能力好，健壮性高。</p><p>决策树算法的缺点:</p><p>1）决策树算法非常容易过拟合，导致泛化能力不强。可以通过设置节点最少样本数量和限制决策树深度来改进。</p><p>2）决策树会因为样本发生一点点的改动，就会导致树结构的剧烈改变。这个可以通过集成学习之类的方法解决。</p><p>3）寻找最优的决策树是一个NP难的问题，我们一般是通过启发式方法，容易陷入局部最优。可以通过集成学习之类的方法来改善。</p><p>4）有些比较复杂的关系，决策树很难学习，比如异或。这个就没有办法了，一般这种关系可以换神经网络分类方法来解决。</p><p>5）如果某些特征的样本比例过大，生成决策树容易偏向于这些特征。这个可以通过调节样本权重来改善。</p><h2 id="knn算法" tabindex="-1">KNN算法 <a class="header-anchor" href="#knn算法" aria-hidden="true">#</a></h2><p>一种惰性分类方法，从训练集中找出k个最接近测试对象的训练对象，再从这k个训练对象中找出居于主导的类别，将其赋给测试对象。</p><p>优点：</p><ol><li><p>简单有效，容易理解和实现；</p></li><li><p>重新训练的代价较低（类别体系的变化和训练集的变化）；</p></li><li><p>计算时间和空间线性于训练集的规模；</p></li><li><p>错误率渐进收敛于贝叶斯错误率，可作为贝叶斯的近似；</p></li><li><p>适合处理多模分类和多标签分类问题；</p></li><li><p>对于类域的交叉或重叠较多的待分类样本集较为适合；</p></li></ol><p>缺点：</p><ol><li><p>是懒散学习方法，比一些积极学习的算法要慢；</p></li><li><p>计算量比较大，需对样本点进行剪辑；</p></li><li><p>对于样本不平衡的数据集效果不佳，可采用加权投票法改进；</p></li><li><p>k值的选择对分类效果有很大影响，较小的话对噪声敏感，需估计最佳k值。</p></li></ol><p>5.可解释性不强，计算量大。</p><p>KNN的主要优点有：</p><p>1） 理论成熟，思想简单，既可以用来做分类也可以用来做回归</p><p>2） 可用于非线性分类</p><p>3） 训练时间复杂度比支持向量机之类的算法低，仅为O(n)</p><p>4） 和朴素贝叶斯之类的算法比，对数据没有假设，准确度高，对异常点不敏感</p><p>5） 由于KNN方法主要靠周围有限的邻近的样本，而不是靠判别类域的方法来确定所属类别的，因此对于类域的 交叉或重叠较多的待分样本集来说，KNN方法较其他方法更为适合</p><p>6）该算法比较适用于样本容量比较大的类域的自动分类，而那些样本容量较小的类域采用这种算法比较容易产生误分</p><p>KNN的主要缺点有：</p><p>1）计算量大，尤其是特征数非常多的时候</p><p>2）样本不平衡的时候，对稀有类别的预测准确率低</p><p>3）KD树，球树之类的模型建立需要大量的内存</p><p>4）使用懒散学习方法，基本上不学习，导致预测时速度比起逻辑回归之类的算法慢</p><p>5）相比决策树模型，KNN模型可解释性不强</p><h2 id="朴素贝叶斯算法" tabindex="-1">朴素贝叶斯算法 <a class="header-anchor" href="#朴素贝叶斯算法" aria-hidden="true">#</a></h2><p>贝叶斯分类器的分类原理是利用各个类别的先验概率，再利用贝叶斯公式及独立性假设计算出属性的类别概率以及对象的后验概率，即该对象属于某一类的概率，选择具有最大后验概率的类作为该对象所属的类别。</p><p>优点：</p><ol><li><p>数学基础坚实，分类效率稳定，容易解释；</p></li><li><p>所需估计的参数很少，对缺失数据不太敏感；</p></li><li><p>无需复杂的迭代求解框架，适用于规模巨大的数据集。</p></li></ol><p>缺点：</p><ol><li><p>属性之间的独立性假设往往不成立（可考虑用聚类算法先将相关性较大的属性进行聚类）；</p></li><li><p>需要知道先验概率，分类决策存在错误率。</p></li></ol><p>朴素贝叶斯的主要优点有：</p><p>1）朴素贝叶斯模型发源于古典数学理论，有稳定的分类效率。</p><p>2）对小规模的数据表现很好，能个处理多分类任务，适合增量式训练，尤其是数据量超出内存时，我们可以一批批的去增量训练。</p><p>3）对缺失数据不太敏感，算法也比较简单，常用于文本分类。</p><p>朴素贝叶斯的主要缺点有：</p><p>1） 理论上，朴素贝叶斯模型与其他分类方法相比具有最小的误差率。但是实际上并非总是如此，这是因为朴素贝叶斯模型给定输出类别的情况下,假设属性之间相互独立，这个假设在实际应用中往往是不成立的，在属性个数比较多或者属性之间相关性较大时，分类效果不好。而在属性相关性较小时，朴素贝叶斯性能最为良好。对于这一点，有半朴素贝叶斯之类的算法通过考虑部分关联性适度改进。</p><p>2）需要知道先验概率，且先验概率很多时候取决于假设，假设的模型可以有很多种，因此在某些时候会由于假设的先验模型的原因导致预测效果不佳。</p><p>3）由于我们是通过先验和数据来决定后验的概率从而决定分类，所以分类决策存在一定的错误率。</p><p>4）对输入数据的表达形式很敏感。</p><h2 id="随机森林算法" tabindex="-1">随机森林算法 <a class="header-anchor" href="#随机森林算法" aria-hidden="true">#</a></h2><p>RF的主要优点有： 1） 训练可以高度并行化，对于大数据时代的大样本训练速度有优势。最主要的优点。</p><p>2） 由于可以随机选择决策树节点划分特征，这样在样本特征维度很高的时候，仍然能高效的训练模型。</p><p>3） 在训练后，可以给出各个特征对于输出的重要性</p><p>4） 由于采用了随机采样，训练出的模型的方差小，泛化能力强。</p><p>5） 相对于Boosting系列的Adaboost和GBDT， RF实现比较简单。</p><p>6） 对部分特征缺失不敏感。</p><p>RF的主要缺点有：</p><p>1）在某些噪音比较大的样本集上，RF模型容易陷入过拟合。</p><ol start="2"><li>取值划分比较多的特征容易对RF的决策产生更大的影响，从而影响拟合的模型的效果。</li></ol><h2 id="adaboost算法" tabindex="-1">AdaBoost算法 <a class="header-anchor" href="#adaboost算法" aria-hidden="true">#</a></h2><p>提升方法是从弱学习算法出发，反复学习，得到一系列的弱分类器（即基本分类器），然后组合这些弱分类器，构成一个强分类器，大多数的提升方法都是改变训练数据集的概率分布（训练数据的权值分布），针对不同的训练数据分布调用弱学习算法学习一系列的弱分类器。</p><p>优点：</p><ol><li><p>分类精度高；</p></li><li><p>可以使用各种方法构建子分类器，Adaboost算法提供的是框架；</p></li><li><p>简单，且不用做特征筛选；</p></li><li><p>不会造成overfitting。</p></li></ol><p>缺点：</p><ol><li><p>对分类错误的样本多次被分错而多次加权后，导致权重过大，影响分类器的选择，造成退化问题；（需改进权值更新方式）</p></li><li><p>数据不平衡问题导致分类精度的急剧下降；</p></li><li><p>算法训练耗时，拓展困难；</p></li><li><p>存在过拟合，鲁棒性不强等问题。</p></li></ol><p>Adaboost的主要优点有：</p><p>1）Adaboost作为分类器时，分类精度很高</p><p>2）在Adaboost的框架下，可以使用各种回归分类模型来构建弱学习器，非常灵活。</p><p>3）作为简单的二元分类器时，构造简单，结果可理解。</p><p>4）不容易发生过拟合</p><p>Adaboost的主要缺点有：</p><p>1）对异常样本敏感，异常样本在迭代中可能会获得较高的权重，影响最终的强学习器的预测准确性。</p><h2 id="gbdt" tabindex="-1">GBDT <a class="header-anchor" href="#gbdt" aria-hidden="true">#</a></h2><p>GBDT主要的优点有：</p><ol><li><p>可以灵活处理各种类型的数据，包括连续值和离散值。</p></li><li><p>在相对少的调参时间情况下，预测的准确率也可以比较高。这个是相对SVM来说的。</p></li></ol><p>3）使用一些健壮的损失函数，对异常值的鲁棒性非常强。比如 Huber损失函数和Quantile损失函数。</p><p>GBDT的主要缺点有：</p><ol><li>由于弱学习器之间存在依赖关系，难以并行训练数据。不过可以通过自采样的SGBT来达到部分并行。</li></ol><h2 id="xgboost算法" tabindex="-1">XGBoost算法 <a class="header-anchor" href="#xgboost算法" aria-hidden="true">#</a></h2><p>1.XGBoost与GBDT相比，其优势：</p><p>将树模型的复杂度加入到正则项中，来避免过拟合，因此泛化性能会优于GBDT。</p><p>损失函数用泰勒展开式展开，同时用到了一阶和二阶导数，可以加快优化速度。</p><p>GBDT只支持CART作为基学习器，XGBoost还支持线性分类器作为基学习器。</p><p>引进了特征子采样，像随机森林那样，既能避免过拟合，又能减少计算。</p><p>在寻找最优分割点时，考虑到传统的贪心算法效率较低，实现了一种近似贪心算法，用来加速和减少内存小号，除此之外，还考虑了稀疏数据集合缺失值的处理。</p><p>XGBoost支持并行处理。XGBoost的并行不是模型生成的并行，而是在特征上的并行，将特征排序后以block的形式存储在内存中，在后面迭代重复使用这个结构。这个block也使得并行化成为了可能，其次在节点分裂时，计算每个特征的增益，最终选择增益最大的那个特征去做分割，那么各个特征的增益计算就可以开多线程进行。</p><p>2.与lightGBM相比的不足点：</p><p>XGBoosting采用预排序，在迭代之前，对结点的特征做预排序，遍历选择最优分割点，数据量大时，贪心法耗时，LightGBM方法采用histogram算法，占用的内存低，数据分割的复杂度更低。</p><p>XGBoosting采用level-wise生成决策树，同时分裂同一层的叶子，从而进行多线程优化，不容易过拟合，但很多叶子节点的分裂增益较低，没必要进行跟进一步的分裂，这就带来了不必要的开销；LightGBM采用深度优化，leaf-wise生长策略，每次从当前叶子中选择增益最大的结点进行分裂，循环迭代，但会生长出更深的决策树，产生过拟合，因此引入了一个阈值进行限制，防止过拟合。</p><h2 id="人工神经网络" tabindex="-1">人工神经网络 <a class="header-anchor" href="#人工神经网络" aria-hidden="true">#</a></h2><p>优点：</p><ol><li><p>分类的准确度高，并行分布处理能力强，分布存储及学习能力强；</p></li><li><p>对噪声神经有较强的鲁棒性和容错能力，能充分逼近复杂的非线性关系，具备联想记忆的功能等。</p></li></ol><p>缺点：</p><ol><li><p>神经网络需要大量的参数，如网络拓扑结构、权值和阈值的初始值；</p></li><li><p>不能观察之间的学习过程，输出结果难以解释，会影响到结果的可信度和可接受程度；</p></li><li><p>学习时间过长,甚至可能达不到学习的目的。</p></li></ol>',121),t=[e];function d(r,s,h,n,c,_){return l(),i("div",null,t)}const u=p(o,[["render",d]]);export{b as __pageData,u as default};
