import type { BlogConfig } from '@/types/config.ts';
import languages, { DEFAULT_LOCALE } from '@/i18n/i18n.config.ts';

/** Frequent identity, copy and content settings come first; optional services follow reading defaults. */
const config: BlogConfig = {
  site: {
    title: 'Where1Returns',
    baseUrl: 'https://tosuthien.org/', // Include the deployment directory, e.g. https://.../blog/.
    defaultLocale: DEFAULT_LOCALE,
    locales: Object.keys(languages),
    localePrefixPolicy: 'redirect-to-default', // Recommended: unprefixed pages refresh directly to the default language.
    timezone: 'Asia/Ho_Chi_Minh',

    faqs: {
      vi: [
        {
          q: 'Theo tục đế thì thánh phàm khác nhau, phàm phu vọng chấp thấy nghe, ngoài tâm kiến lập các pháp, bậc Thánh đã liễu ngộ nhất tâm, lại sao lại đồng thấy nghe như phàm phu?',
          a:
            '“Bậc Thánh dù có thấy nghe, nhưng chẳng có chấp trước, luôn luôn diễn đạt vạn vật chẳng thật, đồng như huyễn hóa”. \n' +
            'Như Kinh Đại Niết Bàn, Bồ Tát Ca Diếp bạch Phật rằng: “Thế Tôn, nếu phiền não từ điên đảo tưởng sinh ra, thì tất cả các bậc Thánh đều thật có điên đảo tưởng, mà tại sao chẳng có phiền não, vậy nghĩa này là thế nào ?”. \n' +
            'Phật hỏi: “Tại sao nói bậc Thánh có điên đảo tưởng ?”. \n' +
            'Ngài Ca Diếp nói: “Thế Tôn, tất cả bậc Thánh thấy trâu cũng gọi là trâu, thấy ngựa cũng gọi là ngựa, thấy nam nữ, lớn nhỏ, nhà cửa, xe cộ và khứ lai đều cũng vậy, thế là điên đảo tưởng rồi!”.\n' +
            'Phật nói : “Phàm phu có hai thứ tưởng, một là thế lưu bố tưởng (thế gian phổ biến lưu hành), hai là trước tưởng (tư tưởng chấp thật). ' +
            'Bậc thánh chỉ có thể lưu bố tưởng, chẳng có trước tưởng. ' +
            'Phàm phu vì sự cảm giác sai lầm, nơi thế lưu bố mà sinh ra trước tưởng, bậc Thánh vì hay chiếu soi thật tướng; nơi thế lưu bố chẳng sinh trước tưởng, nên phàm phu gọi là điên đảo tưởng bậc Thánh dù biết nhưng chẳng gọi là điên đảo tưởng. ' +
            'Lại cảnh vốn tự không, đâu cần phải phá hoại sắc tướng rồi mới là không! ' +
            'Vì chơn tâm của bậc Thánh thường tự chiếu, chẳng nhờ nhân duyên mới sinh khởi, phàm phu thì chấp trước tri kiến, có năng có sở”. ' +
            'Nên Triệu Luận nói : “Hễ có sở tri thì có sở bất tri, chơn tâm của bậc Thánh vô tri nên vô sở bất tri, cái tri của bất tri mới được gọi là Nhất thiết tri”.\n' +
            'Vậy kinh nói: “Chơn tâm của bậc thánh vô tri, vô sở bất tri là đáng tin lắm. ' +
            'Cho nên bậc thánh nơi tâm trống rỗng mà sự chiếu soi chẳng thiếu sót, suốt ngày tri mà chưa từng tri là vậy. ' +
            'Cũng như nước trong thì thấy bóng, đâu có sinh tâm năng sở, cảnh và tâm đều không, chẳng có cái tư tưởng giác tri”.\n' +
            'Trong kinh Lăng Già, Phật nói với Bồ Tát Đại Huệ rằng: “Cảnh thế gian như bóng tượng trong gương, và cảnh giới chiêm bao, nhưng chẳng phải trước mắt của bậc thánh không có cảnh thế gian. ' +
            'Phàm phu vì tư tưởng mê lầm nên đuổi theo cảnh chấp thật, gọi là vô minh điên đảo, chẳng phải minh trí. ' +
            'Bậc Thánh thấy cảnh đồng như phàm phu, mà chẳng có tâm niệm chấp trước, nên chẳng gọi là điên đảo”.\n' +
            'Giải thích rằng: Như thí dụ kể trên tỏ rõ cảnh chỉ có một, mà sự thấy có khác. ' +
            'Bậc Thánh chẳng phải không thấy cảnh thế gian, mà khi thấy đồng như thấy mặt trăng trong nước và bóng tượng trong gương vậy.',
        },
        {
          q: 'Sự thấy của phàm phu có năng thấy sở thấy, nên tâm và cảnh rõ ràng, vậy thì so với sự thấy của bậc Thánh làm sao phân biệt?',
          a:
            'Sự thấy của bậc Thánh Có và Không đồng thời chiếu soi, trong ngoài chẳng trụ, như tiếng dội trong hang, bóng hiện trong gương mà chẳng khởi tâm tác ý, sáng tỏ nhiệm mầu, tịch mà thường chiếu, nên nói là thường ở trong chánh niệm, cũng gọi là chánh tri. ' +
            'Kỳ thật, chẳng phải hữu niệm hữu tri, cũng chẳng phải vô niệm vô tri. ' +
            'Nếu chỉ vô niệm thì tịch mà mất sự chiếu soi, nếu chỉ có chiếu soi thì chiếu mà mất sự thường tịch, cả hai đều chẳng chánh. ' +
            'Chánh là ở chỗ Tịch và Chiếu đi song song với nhau.' +
            'Trong Hoàn Nguyên Tập nói, “Tự tánh khởi chiếu, chiếu soi tất cả, liễu liễu tri mà vô sở tri, liễu liễu kiến mà vô năng kiến, trong ngoài sáng tỏ,cùng khắp pháp giới, cũng gọi là vô chướng ngại, nhãn của Phật Tỳ Lô Giá Na, tràn khắp mười phương chiếu soi tất cả quốc độ Phật” tức là nghĩa này vậy.' +
            'Lại nói, Tâm hay làm Phật, hay làm chúng sinh, hay làm thiên đàng, hay làm địa ngục, hễ tâm có sai biệt thì muôn ngàn cảnh giới sinh khởi, hễ tâm bình đẳng thì pháp giới trống rỗng yên tịnh.' +
            'Tâm phàm thì tam độc nổi lên, tâm thánh thì lục thông tự tại, tâm không thì nhất đạo trong sạnh, tâm hữu thì muôn cảnh tung hoành, như tiếng vang trong hang, lời hùng dội tiếng mạnh, như gương soi tướng, hình lõm hiện bóng co, thế thì biết vạn hạnh do tâm, tất cả tại ta.' +
            'Bên trong hư thì bên ngoài chẳng thật, bên ngoài tế thì bên trong chẳng thô, thiện nhân tất gặp thiện duyên, ác hạnh khó tránh ác cảnh, sự vui  của thiên đàng, sự khổ của địa ngục đều là tự tâm làm ra, chẳng phải người khác lãnh thọ, chẳng do trời sinh, chẳng do đất mọc, chỉ tại nhất niệm ban đầu của mình, nên có sự thăng trầm như thế.' +
            'Muốn được bên ngoài an hòa thì bên trong cần phải bình tĩnh, tâm không thì cảnh tịch, niệm khởi thì pháp sinh, nước đục thì làn sóng đen tối, nước trong thì bóng trăng sáng tỏ.' +
            'Sự cần thiết của người tu hành đều chẳng ra ngoài những việc kể trên, gọi là cửa ải của chúng diệu, cũng là quê nhà của vạn linh, căn bản của thâm trầm và nguồn gốc của họa phước.' +
            'Chỉ cần tự tâm luôn luôn được chánh niệm, đâu thể nghi ngờ cảnh giới bên ngoài! Cho nên, hễ lìa được tội hạnh, phước hạnh, bất động hạnh của chúng sinh, thì chẳng có quả báo khổ vui của tam giới, hễ lìa được kiến văn giác tri của chúng sinh thì đâu có cảnh giới của ngũ uẩn, lục căn, lục trần và lục thức! Nên biết, mê ngộ do thức, nhiễm tịnh do tâm, ấy cũng là mục tiêu của tiền triết hậu học, chỉ thị của muôn ngàn Kinh Luận vậy.' +
            'Trong kinh Lăng Già có bài kệ rằng, “Tâm niệm như nắm đất, làm ra như chén bát (chén bát dụ cho chúng sinh, nắm đất dụ cho tự tâm), mỗi thứ dụ khác nhau, tất cả do tâm tạo”.' +
            'Nếu nhất niệm chẳng sinh thì các duyên tự dứt, nên nói, “Nhất niệm tâm chẳng sinh thì các duyên tự dứt, nên nói, “Nhất niệm tâm chẳng sinh, vạn pháp không sai”. ' +
            'Hiện nay, hoặc tham sinh sợ chết; hoặc lo sống lo già; hoặc bỏ vọng bỏ thân, tùy theo tư tưởng mà tạo tác, nghiệp quả xoay chuyển mãi không dừng. ' +
            'Nếu liễu đạt sinh tử vô sinh, vọng tức vô vọng, một niệm tâm tịch, vạn lự (tất cả tâm và pháp) đều tiêu.' +
            'Vậy thì biết hễ tâm ngộ là xong, chẳng còn pháp nào hơn nữa.',
        },
      ],
      en: [
        {
          q: 'According to conventional truth, there is a distinction between the sage and the ordinary person; the latter, through deluded attachment, perceives sights and sounds as phenomena existing outside the mind. Since the sage has fully realized the "one mind," how could they perceive sights and sounds in the same way as an ordinary person?',
          a:
            '“Although the Sages perceive sights and sounds, they harbor no attachments; they consistently express that all phenomena are unreal—akin to illusions or magical apparitions.”\n' +
            '\n' +
            'In the *Mahāparinirvāṇa Sūtra*, the Bodhisattva Kāśyapa asks the Buddha: “World-Honored One, if afflictions arise from deluded perceptions, and if Sages also possess such perceptions, why is it that they are free from afflictions? How should this be understood?”\n' +
            '\n' +
            'The Buddha asks: “Why do you say that Sages possess deluded perceptions?”\n' +
            '\n' +
            'Kāśyapa replies: “World-Honored One, Sages see an ox and call it an ox; they see a horse and call it a horse. The same applies to their perception of men and women, large and small objects, dwellings, vehicles, and the movement of coming and going—are these not all deluded perceptions?”\n' +
            '\n' +
            'The Buddha explains: “Ordinary people possess two types of perception: first, ‘conventional, socially accepted perception’ (shared linguistic and conceptual conventions); and second, ‘clinging perception’ (the belief that these things are inherently real). Sages possess only the former—conventional, socially accepted perception—and are entirely free from the latter—clinging perception. Because of erroneous cognition, ordinary people develop ‘clinging perceptions’ based upon these conventional, socially accepted ones. Sages, however, clearly illuminate the true nature of reality; thus, they do not develop ‘clinging perceptions’ based upon conventional, socially accepted ones. Consequently, while ordinary people’s perceptions are termed ‘deluded,’ the Sages—though they are aware of these conventions—do not regard them as ‘deluded.’ Furthermore, since phenomena are inherently empty, there is no need to destroy their forms to arrive at emptiness! The true mind of a Sage is self-illuminating and does not arise dependent upon external conditions; ordinary people, by contrast, cling to their own views, creating a dualistic split between the subject who knows and the object that is known.” As the *Zhao Lun* (Treatise of Sengzhao) states: “Wherever there is something known, there is necessarily something unknown. The true mind of a Sage is ‘unknowing’—yet because it is ‘unknowing,’ there is nothing it does not know. This ‘knowing’ that arises from ‘unknowing’ is what is termed ‘Omniscience’ (All-Knowing Wisdom).” Thus, the sutras state: “The true mind of a sage—which is ‘non-knowing’ yet ‘knows everything’—is truly worthy of trust. A sage’s mind is empty, yet its illumination is flawless; they may perceive things all day long, yet in truth, they have never ‘known’ anything at all. It is much like clear water reflecting an image: no subject-object duality arises; both the object and the mind are empty, devoid of any conceptualizing or discriminating thought.”\n' +
            '\n' +
            'In the *Lankavatara Sutra*, the Buddha tells the Bodhisattva Mahamati: “The phenomena of the world are like reflections in a mirror or images in a dream. This does not mean that the world does not exist before the eyes of a sage. Ordinary people, due to deluded thinking, chase after these phenomena and cling to them as real—this is called ‘ignorance’ and ‘delusion,’ not true wisdom. Sages perceive the same phenomena as ordinary people do, but because they are free from the mental habit of attachment, they are not considered deluded.”\n' +
            '\n' +
            'In explanation: As the aforementioned analogy illustrates, while the phenomena themselves are the same, the way they are perceived differs. It is not that sages do not see the world; rather, when they perceive it, it is just like seeing the moon reflected in water or an image appearing in a mirror.',
        },
        {
          q: 'The perception of an ordinary person involves both a subject that perceives and an object that is perceived, rendering the distinction between mind and external phenomena clear; how, then, does this differ from the perception of a sage?',
          a:
            'The vision of the Sages encompasses both "being" and "non-being" simultaneously, dwelling neither within nor without. ' +
            'It is like an echo in a cavern or a reflection in a mirror—manifesting without the arising of deliberate intent. ' +
            'It is wondrously luminous; silent, yet ever-radiant. Thus, it is said to be a state of constant "right mindfulness," also termed "right discernment." ' +
            'In truth, it is neither a state of having thoughts and knowledge, nor one of having no thoughts and no knowledge. ' +
            'If there were only the absence of thought, one would fall into mere stillness, losing the capacity for illumination; conversely, if there were only illumination, one would lose the state of profound, constant stillness. ' +
            'Neither extreme is "right." ' +
            '"Rightness" lies in the harmonious, parallel coexistence of Stillness and Illumination.' +
            'As stated in the *Huan Yuan Ji* (Treatise on Returning to the Source): "The self-nature gives rise to illumination, shining upon all things. ' +
            'One perceives everything with absolute clarity, yet there is no knower to be found; one sees everything with absolute distinctness, yet there is no seer to be found. ' +
            'Inner and outer are luminous, pervading the entire Dharma-realm—a state of total unimpededness. ' +
            'It is the eye of the Buddha Vairocana, extending throughout the ten directions to illuminate every Buddha-land." ' +
            'This is the very meaning intended here.' +
            'Furthermore, it is said that the Mind can manifest as a Buddha, as a sentient being, as a heavenly realm, or as a hell. ' +
            'When the mind harbors distinctions, a myriad of realms arise; when the mind rests in equality, the Dharma-realm is revealed as empty and tranquil.' +
            'In the mind of an ordinary person, the "three poisons" (greed, hatred, and delusion) arise; in the mind of a Sage, the "six supernatural powers" manifest with perfect freedom. ' +
            'When the mind is empty, there is but a single, pristine path; when the mind is caught in "being," a myriad of phenomena surge forth. ' +
            'It is like an echo in a cavern—a powerful call produces a powerful resonance—or like a reflection in a mirror—a concave form produces a distorted image.' +
            ' Thus, know that all myriad practices originate from the Mind; everything depends upon oneself.' +
            'If the inner state is hollow, the outer manifestation cannot be genuine; if the outer manifestation is refined, the inner state cannot be coarse. ' +
            'Those who perform virtuous deeds will inevitably encounter virtuous circumstances, while those who commit evil acts cannot escape adverse conditions. ' +
            'The joys of heaven and the sufferings of hell are both created by one’s own mind—they are not imposed by others, nor are they born of heaven or sprung from the earth. ' +
            'They arise solely from one’s initial thought, leading to such fluctuations between ascent and descent.' +
            'To attain harmony in the external world, one must first cultivate stillness within. ' +
            'When the mind is empty, the external environment becomes tranquil; when a thought arises, phenomena come into being. ' +
            'Just as murky water produces dark, turbulent waves, clear water reflects the bright image of the moon.' +
            'The essentials for a practitioner lie entirely within these principles—this is the gateway to all wonders, the true home of all sentient beings, the foundation of profound depth, and the root from which both misfortune and blessings spring.' +
            'If one’s own mind remains constantly in a state of right mindfulness, how could there be any doubt regarding the external realm? Therefore, by transcending the karmic actions of sentient beings—whether virtuous, evil, or neutral—one is no longer bound by the suffering or happiness of the Three Realms. ' +
            'By transcending the ordinary perceptions, cognitions, and sensory awareness of sentient beings, the realms of the Five Aggregates, the Six Sense Organs, the Six Sense Objects, and the Six Consciousnesses cease to exist. ' +
            'Know this: delusion and enlightenment depend on consciousness, while defilement and purity depend on the mind. ' +
            'This is the ultimate goal pursued by sages of the past and seekers of the present, and it is the core teaching found throughout countless Sutras and Shastras.' +
            'In the *Lankavatara Sutra*, there is a verse that states: "Mental activity is like a lump of clay, which can be fashioned into bowls and vessels" (where the vessels represent sentient beings, and the lump of clay represents the mind itself). ' +
            '"Though the forms may vary, everything is created by the mind."' +
            'If not a single thought arises, all conditions cease of their own accord; thus it is said, “When not a single thought arises, the myriad phenomena are without error.”' +
            'At present, people either crave life and fear death, worry about living and aging, or seek to discard delusions and the physical body—acting according to these various thoughts, they remain trapped in an endless cycle of karma and its consequences.' +
            'If one truly realizes that birth and death are inherently unborn, and that delusions are, in essence, not delusions, then a single moment of mental stillness causes all myriad concerns—every thought and every phenomenon—to vanish.' +
            'Thus, one understands that once the mind is awakened, the task is complete; there is no higher teaching beyond this.',
        },
      ],
      zh: [
        {
          q: '根据传统观念，圣人和普通人之间存在区别。普通人执着于感知和听觉，在心之外建构现象。圣人已经证悟成佛，领悟了心性一体，又怎能像普通人那样感知和听觉呢？',
          a:
            '“即使圣人能见能闻，他们也无执着，总是说一切事物都是虚幻的，如同幻象。”\n' +
            '\n' +
            '在《大般涅槃经》中，迦叶菩萨问佛陀：“尊者，如果烦恼源于妄念，那么所有圣人也都有妄念，可他们为何没有烦恼呢？这是为什么呢？”\n' +
            '\n' +
            '佛陀问：“你为何说圣人有妄念呢？”\n' +
            '\n' +
            '迦叶菩萨答道：“尊者，所有圣人看到水牛就称之为水牛，看到马就称之为马，看到男人女人，无论大小，房屋车辆，来来往往——都一样。这就是妄念！”\n' +
            '\n' +
            '佛陀说：“凡夫有两种知觉：一种是世俗的知觉（俗世的知觉），另一种是执着于现实的知觉。圣人只有世俗的知觉，没有执着于现实的知觉。凡夫由于其错误的知觉，生起世俗的知觉。圣人因为照亮了现实的真实本质，所以不会生起世俗的知觉。因此，凡夫称之为妄想，而圣人即使知道，也不称之为妄想。此外，现象本身是空性的；为什么一定要破除色相才能空性呢？因为圣人的真心总是自明的，不由因缘而生。凡夫执着于知识和知觉，执着于主客。”因此，注释说：“有知之处，必有无明。圣人的真心无知，故知一切。无明之知，即为全知。”\n' +
            '\n' +
            '经文说：“圣人的真心无知，知一切，故为可信。因此，圣人的心空，却光明无瑕；他们终日知晓，却无知。如同清水映照影像，无主客意识；客体与客体皆空，无意识之念，无知觉。”\n' +
            '\n' +
            '在《楞伽经》中，佛陀对摩诃慧菩萨说：“世间如同镜中倒影，如同梦境，但并非世间在圣人眼前不存在。凡夫因执着于所见之物，执着于其为实，此乃无明妄，非智慧。圣人与凡人观照同一世界，却无执着之心，故非妄。”\n' +
            '\n' +
            '解释：如上例所示，所见之物虽为一，但观照方式不同。圣人并非看不见世间，而是在看时，如同在水中观月，如同在镜中观照。',
        },
        {
          q: '普通人的感知仅限于他们所感知的事物，因此心智与客体界限分明。这与圣人的感知有何异同？',
          a:
            '圣人的洞见同时照亮存在与不存在，既不内在于存在，也不外在于存在，如同洞穴中的回声，镜中的倒影，无需意念或念头，清晰明亮，宁静而永恒闪耀，因此被称为常在正念，亦称正知。\n' +
            '\n' +
            '事实上，既非拥有念头和知识，也非没有念头和知识。\n' +
            '\n' +
            '若只有无念头，则宁静失去其光辉；若只有光明，则光明失去其恒久的宁静；二者皆非正道。\n' +
            '\n' +
            '正道在于宁静与光明相辅相成。 +\n' +
            '\n' +
            '《归本藏》中说：“自性生起，光明，照亮一切，明知而不知，明见而不见，内外清净，遍及整个法界，又称无碍，毗卢遮那佛之眼，遍及十方，照亮一切佛土。”这就是它的含义。+\n' +
            '\n' +
            '“此外，心可以是佛、有情众生、天界或地狱。心之异，万界生起；心之均，法界空寂。” +\n' +
            '\n' +
            '“心性平凡时，三毒生起；心性圣洁时，六神通尽享；心性空明时，道清净明晰；心性满盈时，万象涌现，如同洞穴回响，洪亮之声回荡；如同镜子映照面容，凹面映照出凹面。由此可知，一切行为皆源于心，一切皆在我们之内。” +\n' +
            '\n' +
            '“若内心空明，外在亦不真实；若外在精微，内在亦不粗糙。善人必遇善境，恶人必遭恶果。天上的喜乐和地狱上的苦痛，皆由心生，非受他人所赐，非天地所生，乃因最初的念头而生。故有如此动荡。” +\n' +
            '\n' +
            '“欲得外在安宁，须先内心平静。心性空明时，环境宁静；念头生起，万象亦生。”浑浊的水面泛起暗波，清澈的水面映照着皎洁的月光。\n' +
            '\n' +
            '“修行者所需的一切都蕴藏在这些事物之中，它们被称为通往奇妙世界的门户，一切众生的家园，深奥的根基，以及不幸与幸福的源泉。”\n' +
            '\n' +
            '“只要自己的心念始终保持觉知，又怎能怀疑外在世界呢？因此，如果能够从众生的罪业、功德和无常的行为中解脱出来，那么三界中就不会有苦乐的业果。如果能够从众生的知觉、理解和觉知中解脱出来，那么五蕴、六根、六识、六念处就不会存在！要知道，无明和觉悟都源于意识，烦恼和清净都源于心念。这也是古代和现代哲学的目标，是无数经文和论著的指导。” +\n' +
            '\n' +
            '《楞伽经》中有一首偈颂说：“心如捧土，形如钵（钵象征众生，捧土象征心），各相各样，皆由心所造。” +\n' +
            '\n' +
            '“若一念不生，则一切缘起自灭。故说：‘若一念不生，则一切缘起自灭。故说：‘若一念不生，则一切法无误。’ +\n' +
            '\n' +
            '“现今，或执生生死，或忧生老，或舍弃色身，皆依念而生，业力无尽轮回。” +\n' +
            '\n' +
            '“若知生死无生，色即无色，心念自安，一切忧虑（一切心法）皆灭。” +\n' +
            '\n' +
            '“因此，须知当心识开悟时，便已圆满；再无更高的法。”',
        },
      ],
    },
  },
  author: {
    name: 'Where1Returns',
    bio: {
      vi: 'Muôn pháp về một, một về đâu?',
      zh: '万法归一，一归何处？',
      en: 'All Phenomena Return To The One, Where Does One Return To?',
    },
    avatar: '/images/avatar-enso-1.jpg',
    socials: [
      {
        label: 'THAM TỔ SƯ THIỀN',
        description:
          'pháp thoại của Hòa thượng Thiền sư Thích Duy Lực, trình bày về đường lối thực hành Tham Tổ Sư Thiền (Tham Thoại Đầu), giúp người hữu duyên nắm rõ phương pháp tu tập và tự mình thể nghiệm.',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@thamtosuthien000',
      },
      {
        label: 'Tổ Sư Thiền',
        description:
          'Thiền Tông là một tông phái về thiền tối thượng thừa hay còn gọi là Tổ sư thiền, thiền trực tiếp, thiền đốn ngộ, Bồ Đề Đạt Ma thiền... khác với các thứ thiền của Giáo môn và ngoại đạo. Thiền này truyền từ Phật Thích Ca xuống đời thứ nhất là Ma Ha Ca Diếp sau khi Phật đưa cành hoa lên mà không nói gì, chỉ ngài Ca Diếp mỉm cười tỏ ngộ nên gọi là Niêm Hoa Vi Tiếu. Từ đó về sau, 33 đời Tổ sư truyền xuống đến Lục Tổ Huệ Năng thì ngưng truyền Y bát, nhưng vẫn truyền pháp cho tới ngày nay.',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@t%E1%BB%95s%C6%B0thi%E1%BB%81n',
      },
      {
        label: 'Thích Đồng Thường',
        description:
          'Pháp thoại Tổ Sư Thiền được giảng bởi HT. Thích Đồng Thường',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@thichongthuong3142',
      },
      {
        label: 'Tổ Sư Thiền Hà Nội',
        description: 'Audio về Tổ Sư Thiền của nhóm Tổ Sư Thiền Hà Nội',
        icon: 'simple-icons:youtube',
        href: 'https://www.youtube.com/@tosuthienhanoi',
      },
    ],
  },
  text: {
    siteDescription: {
      vi: 'Muôn pháp về một, một về đâu?',
      zh: '万法归一，一归何处？',
      en: 'All Phenomena Return To The One, Where Does One Return To?',
    },
    tabs: {
      search: {
        vi: 'Đọc',
        zh: '阅读',
        en: 'Read',
      },
      posts: {
        vi: 'Bài viết',
        zh: '文章',
        en: 'Articles',
      },
    },
    homeHeading: {
      vi: 'Bạn muốn đọc gì hôm nay?',
      zh: '今天想读点什么？',
      en: 'What would you like to read today?',
    },
    searchHeading: {
      vi: 'Nhập từ khóa để tìm bài viết',
      zh: '输入关键词，发现一篇文章',
      en: 'Enter keywords to discover an article',
    },
    searchPlaceholder: {
      vi: 'Tìm kiếm bài viết, ý tưởng và từ khóa',
      zh: '搜索文章、想法与关键词',
      en: 'Search articles, ideas and keywords',
    },
    notFoundMessage: {
      vi: 'Trang này chưa có bài viết nào.',
      zh: '这一页，还没有写下故事。',
      en: 'This page has no story yet.',
    },
    footerDescription: {
      vi: 'Muôn pháp về một, một về đâu?',
      zh: '万法归一，一归何处？',
      en: 'All Phenomena Return To The One, Where Does One Return To?',
    },
  },
  posts: {
    perPage: 5,
    homeLimit: 4,
    menuLimit: 12, // Plus-menu articles; use 99999 to include all.
    randomLimit: 12, // Independent candidate count for the random button and /random.
    pathPrefix: '', // Optional date directory, e.g. [year]/ or [year]/[month]/.
    dateFormat: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    showDraftsInDev: true,
    showAudio: false,
  },
  sidebar: {
    items: [
      {
        id: 'home',
        type: 'builtin',
        route: 'home',
        label: {
          vi: 'Trang chủ',
          zh: '首页',
          en: 'Home',
        },
        icon: 'square-pen',
      },
      {
        id: 'posts',
        type: 'builtin',
        route: 'posts',
        page: 'posts',
        label: {
          vi: 'Bài viết',
          zh: '文章',
          en: 'Articles',
        },
        icon: 'files',
      },
      {
        id: 'categories',
        type: 'builtin',
        route: 'categories',
        page: 'categories',
        label: {
          vi: 'Thể loại',
          zh: '分类',
          en: 'Categories',
        },
        icon: 'shapes',
      },
      {
        id: 'archives',
        type: 'builtin',
        route: 'archives',
        page: 'archives',
        label: {
          vi: 'Lưu trữ',
          zh: '归档',
          en: 'Archives',
        },
        icon: 'archive',
      },
      {
        id: 'links',
        type: 'builtin',
        route: 'links',
        page: 'links',
        label: {
          vi: 'Nguồn tham khảo',
          zh: '友链',
          en: 'References',
        },
        icon: 'link',
      },
      {
        id: 'about',
        type: 'page',
        page: 'about',
        label: {
          vi: 'Giới thiệu',
          zh: '关于',
          en: 'About',
        },
        icon: 'info',
      },
      /*      {
        id: 'theme-github',
        type: 'external',
        href: 'https://github.com/Raincarnator/Where1Returns',
        newTab: true,
        label: {
          vi: 'Github',
          zh: 'Github 仓库',
          en: 'Github repository',
        },
        icon: 'simple-icons:github',
      },*/
      /*      {
        id: 'docs',
        type: 'external',
        href: 'https://bloggpt.reincarnatey.net',
        newTab: true,
        label: {
          vi: 'Tài liệu hướng dẫn Where1Returns',
          zh: 'Where1Returns 文档',
          en: 'Where1Returns docs',
        },
        icon: 'book-open',
      },*/
    ],
    menu: [
      {
        id: 'home',
        type: 'builtin',
        route: 'home',
        label: {
          vi: 'Trang chủ',
          zh: '首页',
          en: 'Home',
        },
        description: {
          vi: 'Tìm kiếm và các bài viết gần đây',
          zh: '搜索与近期文章',
          en: 'Search and recent articles',
        },
      },
      {
        id: 'posts',
        type: 'builtin',
        route: 'posts',
        page: 'posts',
        label: {
          vi: 'Bài viết',
          zh: '文章',
          en: 'Articles',
        },
        description: {
          vi: 'Duyệt tất cả bài viết',
          zh: '浏览所有文章',
          en: 'Browse all articles',
        },
      },
      {
        id: 'about',
        type: 'page',
        page: 'about',
        label: {
          vi: 'Giới thiệu',
          zh: '关于',
          en: 'About',
        },
        description: {
          vi: 'Giới thiệu về bản demo này',
          zh: '了解这个演示站',
          en: 'About this demo',
        },
      },
      /*      {
        id: 'theme-github',
        type: 'external',
        href: 'https://github.com/Raincarnator/Where1Returns',
        newTab: true,
        label: {
          vi: 'Github',
          zh: 'Github 仓库',
          en: 'Github repository',
        },
      },*/
      /* {
        id: 'docs',
        type: 'external',
        href: 'https://bloggpt.reincarnatey.net',
        newTab: true,
        label: {
          vi: 'Tài liệu hướng dẫn Where1Returns',
          zh: 'Where1Returns 文档',
          en: 'Where1Returns documentation',
        },
        description: {
          vi: 'Tự xây dựng blog của riêng bạn',
          zh: '开始搭建你的博客',
          en: 'Build your own blog',
        },
      },*/
    ],
    width: {
      default: 340,
      min: 240,
      max: 480,
    },
  },
  appearance: {
    defaultTheme: 'system',
    pageTransition: 'fade',
    codeThemes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    showCodeLineNumbers: false,
    categoryCoverStyle: 'thumbnail',
  },
  article: {
    display: {
      author: true,
      published: true,
      readingTime: true,
      updated: true,
      tags: true,
      share: true,
      navigation: true,
      title: true,
    },
    math: true,
    mermaid: true,
    lightbox: true,
    callouts: true,
    toc: {
      enabled: true,
      minDepth: 2,
      maxDepth: 4,
      expandDelay: 1000,
      hideDelay: 800,
    },
    shareCover: {
      enabled: true,
      width: 1200,
      height: 630,
      background: '#f5f5f5',
      foreground: '#171717',
      accent: '#3b82f6',
    },
  },
  footer: {
    since: 2026,
    author: 'Where1Returns',
    showAttribution: true,
    license: {
      label: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    },
  },
  sharing: {
    copyFormat: '{title}\n{description}\n{author} · {blog}\n{url}',
    platforms: [
      {
        name: 'X',
        icon: 'simple-icons:x',
        href: 'https://twitter.com/intent/tweet?text={title}&url={url}',
      },
      {
        name: 'Facebook',
        icon: 'simple-icons:facebook',
        href: 'https://www.facebook.com/sharer/sharer.php?u={url}',
      },
      {
        name: 'LinkedIn',
        icon: 'simple-icons:linkedin',
        href: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
      },
      {
        name: 'Reddit',
        icon: 'simple-icons:reddit',
        href: 'https://www.reddit.com/submit?url={url}&title={title}',
      },
      {
        name: 'Bluesky',
        icon: 'simple-icons:bluesky',
        href: 'https://bsky.app/intent/compose?text={text}',
      },
      {
        name: 'Threads',
        icon: 'simple-icons:threads',
        href: 'https://www.threads.net/intent/post?text={text}',
      },
      {
        name: 'Telegram',
        icon: 'simple-icons:telegram',
        href: 'https://t.me/share/url?url={url}&text={title}',
      },
      {
        name: 'WhatsApp',
        icon: 'simple-icons:whatsapp',
        href: 'https://wa.me/?text={text}',
      },
      {
        name: 'LINE',
        icon: 'simple-icons:line',
        href: 'https://social-plugins.line.me/lineit/share?url={url}',
      },
      {
        name: {
          vi: 'Weibo',
          zh: '微博',
          en: 'Weibo',
        },
        icon: 'simple-icons:sinaweibo',
        href: 'https://service.weibo.com/share/share.php?url={url}&title={title}&pic={image}',
      },
      {
        name: 'QQ',
        icon: 'simple-icons:qq',
        href: 'https://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&summary={description}&desc={description}&site={blog}&pics={image}',
      },
      {
        name: {
          vi: 'QQ',
          zh: 'QQ 空间',
          en: 'QQ Space',
        },
        icon: 'simple-icons:qzone',
        href: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&summary={description}&pics={image}',
      },
      {
        name: 'Tumblr',
        icon: 'simple-icons:tumblr',
        href: 'https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}&caption={description}&posttype=link',
      },
      {
        name: 'Pinterest',
        icon: 'simple-icons:pinterest',
        href: 'https://www.pinterest.com/pin/create/button/?url={url}&media={image}&description={title}',
      },
      {
        name: {
          vi: 'Mail',
          zh: '电子邮件',
          en: 'Email',
        },
        icon: 'lucide:mail',
        href: 'mailto:?subject={title}&body={text}',
      },
    ],
  },
  statistics: {
    enabled: true,
    articleCount: true,
    wordCount: true,
    days: true,
    languages: true,
    averageWords: true,
    updateFrequency: true,
    firstPublication: true,
    lastUpdate: true,
    heatmap: true,
    recentWords: true,
    recentLimit: 12,
  },
};

export default config;
