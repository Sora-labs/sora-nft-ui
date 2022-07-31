import VerifyProfileModal from "components/Modals/VerifyProfileModal";

function CreateCollection() {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col w-1/2">
                <VerifyProfileModal/>
            </div>
            <div className="flex flex-col w-1/2">

            </div>
        </div>
    );
}

export default CreateCollection;