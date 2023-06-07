import getConversationById from "@/app/actions/getConverstaionById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
    conversationId: string;
}

const ConversationId = async ({ params}: {params: IParams}) => {

    const conversation = await getConversationById(params.conversationId);    
    const messages      = await getMessages(params.conversationId);

    if(!conversation){
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    TEST
                </div>
            </div>
        )
    }

    return (
        <div>Conversation Id TEST</div>
    )
}

export default ConversationId;