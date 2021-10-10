<!-- template for the modal component -->
<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" @click.stop>
              <slot></slot>
            </div>
        </div>
    </transition>
</template>

<!-- template for the NewPostModal component -->
<template>
    <modal :show="show" @close="close">
        <div class="modal-header">
            <h3>New Post</h3>
        </div>
        <div class="modal-body">
            <label class="form-label">
                Title
                <input v-model="title" class="form-control">
            </label>
            <label class="form-label">
                Body
                <textarea v-model="body" rows="5" class="form-control">
                </textarea>
            </label>
        </div>
        <div class="modal-footer text-right">
            <button class="modal-default-button" @click="savePost()">
                Save
            </button>
        </div>
    </modal>
</template>

<!-- template for the NewCommentModal component -->
<template id="new-comment-modal-template">
    <modal :show="show" @close="close">
        <div class="modal-header">
            <h3>New Comment</h3>
        </div>
        <div class="modal-body">
            <label class="form-label">
                Comment
                <textarea v-model="comment" rows="5" class="form-control">
                </textarea>
            </label>
        </div>
        <div class="modal-footer text-right">
            <button class="modal-default-button" @click="savePost()">
                Post
            </button>
        </div>
    </modal>
</template>


<!-- app -->
<div id="app">
    <button @click="showNewPostModal = true">New Post</button>
    <button @click="showNewCommentModal = true">Add Comment</button>
    <new-post-modal :show="showNewPostModal" @close="showNewPostModal = false"></new-post-modal>
    <new-comment-modal :show="showNewCommentModal" @close="showNewCommentModal = false"></new-comment-modal>
</div>